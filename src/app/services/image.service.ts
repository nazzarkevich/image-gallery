import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

@Injectable()
export class ImageService {

  constructor(private db: AngularFireDatabase) { }

}
