import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Image } from '../models/image.model';
import { Upload } from '../models/upload.model';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {

  images: Observable<Image[]>;
  private basePath = '/uploads';
  private uploadTask: AngularFireList<Image[]>;

  constructor(private db: AngularFireDatabase) {
    this.images = this.db.list('/uploads').valueChanges();
  }

  uploadImage(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`)
      .put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: firebase.storage.UploadTaskSnapshot) => {
        upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      (): any => {
        console.log(upload);
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
        return;
      }
    );
  }

  private saveFileData(upload: Upload) {
    let key = '';
    this.db.list<Image>(`${this.basePath}/`).push(upload).on('value', function(snapshot) {
      key = snapshot.key;
    });
    this.setKey(key);
  }

  private setKey(key: string) {
    firebase.database().ref('uploads/' + key).update({
      id: key
    });
  }

  deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  getImages(): Observable<Image[]> {
    return this.images;
  }

  getImage(key: string) {
    return firebase.database().ref(`${this.basePath}/` + key).once('value')
      .then(snap => snap.val());
  }

}
