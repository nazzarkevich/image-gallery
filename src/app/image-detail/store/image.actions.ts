import { Action } from '@ngrx/store';
import { Image } from '../../shared/image.model';

export const GET_IMAGE = 'GET_IMAGE';
export const GET_IMAGES = 'GET_IMAGES';
export const GET_IMAGES_SUCCESS = 'GET_IMAGES_SUCCESS';
export const DELETE_IMAGE = 'DELETE_IMAGE';

export class GetImages implements Action {
  readonly type = GET_IMAGES;
  constructor() {}
}

export class GetImagesSuccess implements Action {
  readonly type = GET_IMAGES_SUCCESS;
  constructor(public payload: Image[]) {}
}

export type Actions = GetImages | GetImagesSuccess;
