import React, { Component } from 'react';
import './Page.scss';
import Board from '../Board/Board';
import Menu from '../Menu/Menu';
import logo from '../../../src/logo.svg';

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <header className="Navbar">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Board />
        <Menu />
      </div>
    );
  }
}

export default Page;
