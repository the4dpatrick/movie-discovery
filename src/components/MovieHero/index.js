import React, { PropTypes as P } from 'react';
import './index.css';
import { formatImageUrl } from '../../utils';

const MovieHero = props => {
  const { movie } = props;
  const backgroundImage = `url(${formatImageUrl(movie.backdrop_path, 1000)})`;
  return (
    <div className="movie-hero">
      <div className="movie-hero-text">
        <div>
          <div className="movie-hero-title">
            {movie.title} - {movie.vote_average}
          </div>
          <div className="movie-hero-genres">
            {movie.genres.map(g => g.name).join(' | ')}
          </div>
        </div>
        <div>
        <div className="movie-hero-tagline">
          {movie.tagline}
        </div>
        <div className="movie-hero-overview">
          {movie.overview}
        </div>
        </div>
      </div>
      <div className="movie-hero-image" style={{ backgroundImage }}>
      </div>
    </div>
  )
}

MovieHero.propTypes = {
  movie: P.object.isRequired
}

export default MovieHero;
