import React, { Component, PropTypes as P } from 'react';
import Select from 'react-select';
import { push } from 'react-router-redux';
import './index.css';
import '../../../node_modules/react-select/dist/react-select.css';

class SearchBar extends Component {

  formatOptions(searchResults) {
    return searchResults.map(s => ({value: s.id, label: s.title}))
  }
  onInputKeyDown(e) {
    // TODO: Debounce
    if (!e.target.value) return;
    this.props.search(e.target.value)
  }
  render() {
    const { searchResults, transitionToMovieDetails } = this.props;

    return (
      <div id="search-bar">
        <Select
          className="search-input"
          options={this.formatOptions(searchResults)}
          onInputKeyDown={this.onInputKeyDown.bind(this)}
          placeholder="Search Movies..."
          onChange={option => transitionToMovieDetails(option.value)}
        />
      </div>
    )
  }
}

SearchBar.propTypes = {
  searchResults: P.array.isRequired,
  search: P.func.isRequired,
  transitionToMovieDetails: P.func.isRequired
}

export default SearchBar;
