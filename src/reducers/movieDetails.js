import {
  LOAD_MOVIE_DETAILS,
  LOAD_MOVIE_DETAILS_SUCCESS,
  LOAD_MOVIE_DETAILS_ERROR
} from '../constants';

const initialState = {}

export default function movieDetails(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIE_DETAILS:
      return initialState;
    case LOAD_MOVIE_DETAILS_SUCCESS:
      return Object.assign({}, state, action.payload);
    case LOAD_MOVIE_DETAILS_ERROR:
    default:
      return state;
  }
}
