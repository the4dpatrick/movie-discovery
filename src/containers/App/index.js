import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Movie Discovery</h2>
        </div>
        <p className="App-intro">
          A movie discovering web app using the The Movie Database API
        </p>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default App;
