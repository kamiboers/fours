import React, { Component } from 'react';
import './Page.scss';
import Board from '../Board/Board';
import Menu from '../Menu/Menu';

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <Board />
        <Menu />
      </div>
    );
  }
}

export default Page;
