import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import MovieItem from '../../components/MovieItem';
import './index.css';

class MovieList extends Component {
  componentWillMount() {
    this.props.loadPopularMovies();
  }
  render() {
    const { movies } = this.props;
    if (!movies.length) return <div>Loading</div>;

    return (
      <div className="movie-list">
        {movies.map(m => <MovieItem movie={m} key={m.id}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { movies: state.popularMovies }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
