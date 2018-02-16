import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Image } from '../models/image.model';
// import 'firebase/storage';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {

  images: Observable<Image[]>;

  constructor(private db: AngularFireDatabase) {
    this.images = this.db.list('/uploads').valueChanges();
  }

  getImages(): Observable<Image[]> {
    return this.images;
  }

}
