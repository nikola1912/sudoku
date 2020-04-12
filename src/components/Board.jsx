import React from 'react';

const Board = ({board, boardSize}) => (
    <div 
        className={"board"}
        style={{gridTemplate: `repeat(${boardSize}, 1fr) / repeat(${boardSize}, 1fr)`}}>
            {board.map((row, rowIndex) => row.map((cellValue, columnIndex) => (
                <Cell
                    key={rowIndex * boardSize + columnIndex}
                    value={cellValue}
                    borderClasses={"" +
                        (columnIndex % boardSize**(1/2) === 0 ? "border-left " : "") +
                        (rowIndex % boardSize**(1/2) === 0 ? "border-top " : "")} />
            )))}
    </div>
);

const Cell = (props) => (
    <div className={`board-cell ${props.borderClasses}`}>
        {props.value}
    </div>
);

export default Board;