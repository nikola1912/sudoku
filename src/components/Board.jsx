import React from 'react';

class Board extends React.Component {

    render() {
        const { board, boardSize } = this.props;
        const squareSize = boardSize**(1/2);

        return (
            <div 
                className={"board"}
                style={{gridTemplate: `repeat(${boardSize}, 1fr) / repeat(${boardSize}, 1fr)`}}>
                    {board.map((row, rowIndex) => row.map((cellValue, columnIndex) => (
                        <Cell
                            key={rowIndex * boardSize + columnIndex}
                            value={cellValue}
                            borderClasses={"" +
                                (columnIndex % squareSize === 0 ? "border-left " : "") +
                                (rowIndex % squareSize === 0 ? "border-top " : "")} />
                    )))}
            </div>
        );
    }
}

const Cell = (props) => (
    <div className={`board-cell ${props.borderClasses}`}>
        {props.value}
    </div>
);

export default Board;