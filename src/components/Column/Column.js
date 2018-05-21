import React, { Component } from 'react';
// import './Board.css';
import Cell from '../Cell/Cell';

class Column extends Component {
  render() {
    return (
      <div className="Column">
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
        <Cell />
      </div>
    );
  }
}

export default Column;
