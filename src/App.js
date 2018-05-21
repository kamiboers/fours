import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Page from './components/Page/Page'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Page />
      </div>
    );
  }
}

export default App;
