import {
  LOAD_POPULAR_MOVIES,
  LOAD_POPULAR_MOVIES_SUCCESS,
  LOAD_POPULAR_MOVIES_ERROR
} from '../constants';

const initialState = [];

export default function popularMovies(state = initialState, action) {
  switch (action.type) {
    case LOAD_POPULAR_MOVIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
