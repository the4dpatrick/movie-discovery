import React, { PropTypes as P } from 'react';
import './index.css';
import { formatImageUrl } from '../../utils';

const MovieHero = props => {
  const { movie } = props;
  const backgroundImage = `url(${formatImageUrl(movie.backdrop_path, 1000)})`;
  return (
    <div className="movie-hero movie-hero-image" style={{ backgroundImage }}>
      <div className="movie-hero-title">{movie.title}</div>
    </div>
  )
}

MovieHero.propTypes = {
  movie: P.object.isRequired
}

export default MovieHero;
