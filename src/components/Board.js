import React from 'react';

const Board = (props) => {
    let newBoard = [];
    let startIndex = 0;
    const boardSize = props.boardSize;
    const squareSize = boardSize**(1/2);

    for (let i = 0; i < boardSize; i++) {
        newBoard.push(<Square
            key={i}
            board={props.board}
            boardSize={boardSize}
            squareSize={squareSize}
            startIndex={startIndex} 
        />);
        startIndex += squareSize;
    }
    
    return (
        <div 
            className={"board"}
            style={{gridTemplate: `repeat(${squareSize}, 1fr) / repeat(${squareSize}, 1fr)`}}>
                {[...newBoard]}
        </div>
    )
}


const Square = (props) => {
    let squareCells = [];
    const { board, boardSize, squareSize, startIndex } = props;
    const lastRow = startIndex + squareSize * boardSize;

    for (let row = startIndex; row < lastRow; row += boardSize) 
        for (let index = row; index < row + squareSize; index++) 
            squareCells.push(<Cell key={index} value={board[index]} />);

    return (
        <div
            className="board-square"
            style={{gridTemplate: `repeat(${squareSize}, 1fr) / repeat(${squareSize}, 1fr)`}}>
                {[...squareCells]}
        </div>
    );
}


const Cell = (props) => {
    return (
        <div className="board-cell">
            {props.value}
        </div>
    );
}

export default Board;