import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import movieDetails from './movieDetails';
import popularMovies from './popularMovies';

const rootReducer = combineReducers({
  routing
  routing,
  movieDetails,
  popularMovies,
});

export default rootReducer;
