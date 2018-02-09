import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { Image } from '../shared/image.model';
import 'firebase/storage';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {

  constructor(private db: AngularFireDatabase) { }

  getImages(): Observable<Image[]> {
    return this.db.list('/uploads').valueChanges();
  }

}
