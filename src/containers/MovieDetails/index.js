import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import MovieHero from '../../components/MovieHero';

class MovieDetails extends Component {
  componentWillMount() {
    this.props.loadMovieDetails(this.props.params.movieId);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.movieId !== this.props.params.movieId) {
      this.props.loadMovieDetails(nextProps.params.movieId);
    }
  }
  render() {
    const { movie } = this.props;
    if (!Object.keys(movie).length) return null;

    return (
      <div>
        <MovieHero movie={movie} />
        <div>
          {JSON.stringify(movie, null, 2)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { movie: state.movieDetails }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
