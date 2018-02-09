import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import {
  AngularFireDatabase,
  AngularFireList
} from 'angularfire2/database';
import { Image } from '../shared/image.model';
import { Upload } from '../shared/upload.model';
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
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        this.saveFileData(upload);
        return;
      }
    );
  }
  private saveFileData(upload: Upload) {
    this.db.list<Image>(`${this.basePath}/`).push(upload);
  }

}
