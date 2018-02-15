import * as ImageActions from './image.actions';
import { Image } from '../../shared/image.model';

export interface AppState {
  mainState: State;
}

export interface State {
  loading: boolean;
  images: Image[];
}

const initialState: State = {
  loading: false,
  images: []
};

export function imageReducer(state = initialState, action: ImageActions.Actions): State {
  switch (action.type) {
    case ImageActions.GET_IMAGES:
      return {
        ...state,
        loading: true
      };
    case ImageActions.GET_IMAGES_SUCCESS: {
      return {
        loading: false,
        images: action.payload
      };
    }
      default: {
        return state;
      }
    }
}
