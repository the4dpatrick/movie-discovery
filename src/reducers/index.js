import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import movieDetails from './movieDetails';
import popularMovies from './popularMovies';
import search from './search';

const rootReducer = combineReducers({
  routing,
  movieDetails,
  popularMovies,
  search
});

export default rootReducer;
