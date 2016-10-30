import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import popularMovies from './popularMovies';

const rootReducer = combineReducers({
  routing
  routing,
  popularMovies,
});

export default rootReducer;
