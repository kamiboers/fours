import React, { Component } from 'react';
import './Board.scss';
import Column from '../Column/Column';

class Board extends Component {
  render() {
    return (
      <div className="Board">
      <div className="PaddingColumn Left" />
        

        { [0,1,2,3,4,5,6].map((index) => {
          return (
            <Column key={index} />
          )
        })}

        <div className="PaddingColumn Right" />

      </div>
    );
  }
}

export default Board;
