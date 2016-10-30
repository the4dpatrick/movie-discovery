import axios from 'axios';
const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w';
const TMDB_API_URL = 'https://api.themoviedb.org/3';
import config from '../config';

export function requestPopularMovies() {
  return axios.get(formatAPIUrl('/movie/popular'));
}

function formatAPIUrl(endpoint) {
  return `${TMDB_API_URL}${endpoint}?api_key=${config.TMDB_API_KEY}`
}

export function formatImageUrl(imagePath, width="500") {
  return `${TMDB_IMAGE_URL}${width}${imagePath}`;
}
