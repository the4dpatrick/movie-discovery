import {
  LOAD_POPULAR_MOVIES,
  LOAD_POPULAR_MOVIES_SUCCESS,
  LOAD_POPULAR_MOVIES_ERROR,
} from '../constants';
import { requestPopularMovies } from '../utils';

export function loadPopularMovies() {
  return dispatch => {
    dispatch({
      type: LOAD_POPULAR_MOVIES
    });

    requestPopularMovies()
      .then(res => dispatch(loadPopularMoviesSuccess(res.data.results)))
      .catch(err => dispatch(loadPopularMoviesError(err)));
  }
}

export function loadPopularMoviesSuccess(movies) {
  return {
    type: LOAD_POPULAR_MOVIES_SUCCESS,
    payload: movies
  }
}

export function loadPopularMoviesError(err) {
  return {
    type: LOAD_POPULAR_MOVIES_ERROR,
    payload: err
  }
}
