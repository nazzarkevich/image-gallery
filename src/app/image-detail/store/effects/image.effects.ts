import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { ImageService } from '../../../services/image.service';
import * as fromActions from '../actions/image.actions';
import { switchMap } from 'rxjs/operator/switchMap';
import { map } from 'rxjs/operator/map';

@Injectable()
export class ImageEffects {
  constructor(private actions$: Actions,
              private imageService: ImageService
            ) {}

@Effect()
GetImages$: Observable<Action> = this.actions$.ofType(fromActions.LOAD_ALL_IMAGES)
  .switchMap(() => {
    return this.imageService.getImages()
  .map(data => new fromActions.LoadAllImagesSuccess({ images: data }));
});

}
