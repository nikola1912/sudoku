import React from 'react';

const Board = (props) => {
    let newBoard = [];
    let startIndex = 0;
    let squareCount = 1;
    const boardSize = props.boardSize;
    const squareSize = boardSize**(1/2);

    for (let i = 0; i < boardSize; i++) {
        newBoard.push(<Square
            key={i}
            board={props.board}
            boardSize={boardSize}
            squareSize={squareSize}
            startIndex={startIndex}
            testMode={props.testMode}
        />);
        if (squareCount === 1 ? false : squareCount % squareSize === 0) 
            startIndex = (boardSize**2 / squareSize) * (squareCount / squareSize);
        else 
            startIndex += squareSize;

        squareCount++;
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
            squareCells.push(<Cell 
                key={index}
                value={board[index]}
                boardSize={boardSize}
                testMode={props.testMode}
            />);

    return (
        <div
            className="board-square"
            style={{gridTemplate: `repeat(${squareSize}, 1fr) / repeat(${squareSize}, 1fr)`}}>
                {[...squareCells]}
        </div>
    );
}


const Cell = (props) => {
    let allowedValues;
    switch (props.boardSize) {
        case 9: 
            allowedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            break;
        case 16:
            allowedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
            break;
        default:
            allowedValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    return (
        <div className="board-cell">
            {props.testMode ? 
                props.value :
                allowedValues.includes(props.value) ? props.value : null}
        </div>
    );
}

export default Board;