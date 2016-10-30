import React from 'react';
import SearchBarContainer from '../../containers/SearchBarContainer';
import { Link } from 'react-router';

const Nav = (props) => {
  return (
    <div className="nav">
      <div className="App-header">
        <Link to="/">Movie Discovery</Link>
      </div>
      <SearchBarContainer />
    </div>
  )
}

export default Nav;
