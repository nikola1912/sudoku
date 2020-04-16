import React from 'react';

const Board = ({board, boardSize}) => (
    <div className={"board"}>
        {board.map((row, rowIndex) => 
            <div className="board-row" key={rowIndex}>
                {row.map((cellValue, columnIndex) => 
                    <Cell
                        key={rowIndex * boardSize + columnIndex}
                        value={cellValue}
                        boardSize={boardSize} />
                )}
            </div>
        )}
    </div>
);

const Cell = (props) => (
    <div className={`board-cell board-cell-size${props.boardSize}`}>
        {props.value}
    </div>
);

export default Board;