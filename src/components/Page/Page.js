import React, { Component } from 'react';
import './Page.scss';
import Board from '../Board/Board';

class Page extends Component {
  render() {
    return (
      <div className="Page">
        <Board />
      </div>
    );
  }
}

export default Page;
