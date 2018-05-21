import React, { Component } from 'react';
import './Board.scss';
import Column from '../Column/Column';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </div>
    );
  }
}

export default Board;
