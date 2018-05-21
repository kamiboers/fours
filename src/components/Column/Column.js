import React, { Component } from 'react';
import './Column.scss';
import Cell from '../Cell/Cell';

class Column extends Component {
  render() {
    return (
      <div className="Column {isLeftBound} {isRightBound}">
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
