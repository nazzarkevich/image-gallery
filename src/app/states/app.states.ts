import { Image } from '../models/image.model';
import { EntityState } from '@ngrx/entity';

export interface AppState {
  imageState: ImageState;
}

export interface ImageState extends EntityState<Image> {
  selectedImageId: string | number | null;
}
