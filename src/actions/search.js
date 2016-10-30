import {
  SEARCH_MOVIE,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MOVIE_ERROR
} from '../constants';
import { requestMovies } from '../utils';
import { push } from 'react-router-redux';

export function searchMovie(query) {
  return dispatch =>
    dispatch({ type: SEARCH_MOVIE });
    requestMovies(query)
      .then(res => dispatch(searchMovieSuccess(res.data.results)))
      .catch(err => dispatch(searchMovieError(err)))
  }
}

export function searchMovieSuccess(results) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    payload: results
  }
}

export function searchMovieError() {
  return {
    type: SEARCH_MOVIE_ERROR
  }
}

export function transitionToMovieDetails(id) {
  return dispatch => dispatch(push(`/movie/${id}`));
}
