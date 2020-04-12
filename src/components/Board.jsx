import React from 'react';

class Board extends React.Component {

    getFontSize(boardSize) {
        if (boardSize === 9)
            return "1em";
        else if (boardSize === 16 )
            return "0.7em";
    }

    render() {
        const { board, boardSize } = this.props;
        const fontSize = this.getFontSize(boardSize);
        const squareSize = boardSize**(1/2);

        return (
            <div 
                className={"board"}
                style={{gridTemplate: `repeat(${boardSize}, 1fr) / repeat(${boardSize}, 1fr)`}}>
                    {board.map((row, rowIndex) => row.map((cellValue, columnIndex) => (
                        <Cell 
                            key={rowIndex * boardSize + columnIndex} 
                            fontSize={fontSize} 
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
    <div 
        className={`board-cell ${props.borderClasses}`}
        style={{fontSize: `${props.fontSize}`}}>
            {props.value}
    </div>
);

export default Board;