import { Action } from '@ngrx/store';
import { Image } from '../../../models/image.model';

export const ADD_IMAGE = 'ADD_IMAGE';
export const LOAD_ALL_IMAGES = 'LOAD_ALL_IMAGES';
export const LOAD_ALL_IMAGES_SUCCESS = 'LOAD_ALL_IMAGES_SUCCESS';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const SELECT_IMAGE = 'SELECT_IMAGE';
export const SELECT_IMAGE_URL = 'SELECT_IMAGE_URL';

export class AddImage implements Action {
  readonly type = ADD_IMAGE;
  constructor(public payload: { image: Image }) {}
}

export class RemoveImage implements Action {
  readonly type = REMOVE_IMAGE;
  constructor(public payload: { id: string }) {}
}

export class LoadAllImages implements Action {
  readonly type = LOAD_ALL_IMAGES;
  constructor() {}
}

export class LoadAllImagesSuccess implements Action {
  readonly type = LOAD_ALL_IMAGES_SUCCESS;
  constructor(public payload: { images: Image[] }) {}
}

export class SelectImage implements Action {
  readonly type = SELECT_IMAGE;
  constructor(public payload: { imageId: string }) {}
}

export class SelectImageUrl implements Action {
  readonly type = SELECT_IMAGE_URL;
  constructor(public payload: { imageUrl: string }) {}
}

export type IMAGE_ACTIONS =
AddImage             |
RemoveImage          |
LoadAllImages        |
LoadAllImagesSuccess |
SelectImage          |
SelectImageUrl;
