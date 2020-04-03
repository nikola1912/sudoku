import React from 'react';

class Board extends React.Component {
    
    render() {
        return (
            <div>
                {createBoard(this.props.board, this.props.boardSize)}
            </div>
        )
    }
}

const createBoard = (board, boardSize) => {
    let squareSize = boardSize**(1/2);
    let newBoard = [];
    for (let i = 0; i < boardSize; i++) {
        newBoard.push(<div 
            key={`square${i}`} 
            className="board-square"
            style={{gridTemplate: `repeat(${squareSize}, 1fr) / repeat(${squareSize}, 1fr)`}}>     
        </div>);
    }
    
    let startIndex = 0;
    for (let i = 0; i < boardSize; i++) {
        let squareRow = [];
        for (let row = startIndex; row < startIndex + squareSize * boardSize; row += boardSize) {
            for (let index = row; index < row + squareSize; index++) {
                squareRow.push(<div key={`cell${index}`} className="board-cell">{board[index]}</div>);
            }
        }
        newBoard[i] = React.cloneElement(newBoard[i], null, [...squareRow]);
        startIndex += squareSize;
    }
    
    return <div
        className="board"
        style={{gridTemplate: `repeat(${squareSize}, 1fr) / repeat(${squareSize}, 1fr)`}}>
            {newBoard}
    </div>;
};

export default Board;