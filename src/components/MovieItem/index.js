import React, { PropTypes as P } from 'react';
import { formatImageUrl } from '../../utils';
import './index.css';
import { Link } from 'react-router';

const MovieItem = (props) => {
  const { movie } = props;
  return (
    <Link to={`/movie/${movie.id}`} className="movie-item">
      <img src={formatImageUrl(movie.poster_path, 300)} alt={movie.overview} />
      <div className="movie-item-details">
        <div className="movie-item-details-title">
          {movie.title} - {movie.vote_average}
        </div>
      </div>
    </Link>
  )
}

MovieItem.propTypes = {
  movie: P.object.isRequired
}

export default MovieItem;
