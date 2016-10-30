import {
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_ERROR
} from '../constants';

const initialState = [];

export default function search(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return [];
    case SEARCH_MOVIE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
