import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import SearchBar from '../../components/SearchBar';

const SearchBarContainer = (props) => {
  const { searchResults, searchMovie, transitionToMovieDetails } = props;
  return <SearchBar searchResults={searchResults} search={searchMovie} transitionToMovieDetails={transitionToMovieDetails}/>
}

const mapStateToProps = (state) => {
  return { searchResults: state.search }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
