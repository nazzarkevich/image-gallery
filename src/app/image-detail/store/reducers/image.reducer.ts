import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromActions from '../actions/image.actions';
import * as fromAdapter from './image.adapter';
import { ImageState } from '../../../states/app.states';

export const initialState: ImageState = fromAdapter.adapter.getInitialState({
  selectedImageId: null
});

export function imageReducer(state = initialState, action: fromActions.IMAGE_ACTIONS): ImageState {
  switch (action.type) {
    case fromActions.ADD_IMAGE: {
      return fromAdapter.adapter.addOne(action.payload.image, state);
    }
    case fromActions.REMOVE_IMAGE: {
      return fromAdapter.adapter.removeOne(action.payload.id, state);
    }
    case fromActions.LOAD_ALL_IMAGES_SUCCESS: {
      return fromAdapter.adapter.addAll(action.payload.images, state);
    }
    case fromActions.SELECT_IMAGE: {
      return Object.assign({ ...state, selectedImageId: action.payload.imageId });
    }
    default: {
      return state;
    }
  }
}

export const getSelectedImageId = (state: ImageState) => state.selectedImageId;

export const getImageState = createFeatureSelector<ImageState>('imageState');

export const selectImageIds = createSelector(getImageState, fromAdapter.selectImageIds);
export const selectImageEntities = createSelector(getImageState, fromAdapter.selectImageEntities);
export const selectAllImages = createSelector(getImageState, fromAdapter.selectAllImages);

export const selectCurrentImageId = createSelector(getImageState, getSelectedImageId);

export const selectCurrentImage = createSelector(
  selectImageEntities,
  selectCurrentImageId,
  (imageEntities, imageId) => imageEntities[imageId]
);
