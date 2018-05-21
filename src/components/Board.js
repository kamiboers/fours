import React, { Component } from 'react';
// import './Board.css';
import Column from './Column';

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
