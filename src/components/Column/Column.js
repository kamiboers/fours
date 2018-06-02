import React, { Component } from 'react';
import './Column.scss';
import Cell from '../Cell/Cell';

class Column extends Component {
  render() {

    let className = "Column";
    return (
      <div className={className}>
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
