import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { ImageService } from '../../services/image.service';
import * as actions from './image.actions';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operator/switchMap';
import { map } from 'rxjs/operator/map';
import { Observable } from 'rxjs/Observable';

export type Action = actions.Actions;

@Injectable()
export class EventEffects {
  constructor(private actions$: Actions,
              private imageService: ImageService) {}

@Effect()
GetImages$: Observable<Action> = this.actions$.ofType(actions.GET_IMAGES)
  .switchMap(() => {
    return this.imageService.getImages()
  .map(payload => new actions.GetImagesSuccess(payload));
});

}
