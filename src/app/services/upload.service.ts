import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {
  AngularFireDatabase,
  AngularFireList
} from 'angularfire2/database';
import { Image } from '../models/image.model';
import { Upload } from '../models/upload.model';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  private basePath = '/uploads';
  private uploadTask: AngularFireList<Image[]>;


  constructor(private db: AngularFireDatabase) { }

  uploadFile(upload: Upload) {
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
        upload.id = this.db.createPushId();
        this.saveFileData(upload);
        return;
      }
    );
  }

  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
    .then( () => {
      this.deleteFileStorage(upload.name);
    })
    .catch((error) => console.log(error));
  }

  private saveFileData(upload: Upload) {
    this.db.list<Image>(`${this.basePath}/`).push(upload);
  }

  private deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }

}
