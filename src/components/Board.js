import React from 'react';

class Board extends React.Component {

    getVerticalBorderIndexes(boardSize) {
        let verticalBorderIndexes = [];
        const squareSize = boardSize**(1/2);
        for (let column = squareSize; column < boardSize; column += squareSize)
            for (let index = column; index <= boardSize**2 - (boardSize - column); index += boardSize)
                verticalBorderIndexes.push(index);

        return verticalBorderIndexes;
    }

    getHorizontalBorderIndexes(boardSize) {
        let horizontalBorderIndexes = [];
        const squareSize = boardSize**(1/2);
        const nextRowStep = boardSize * squareSize
        const firstRowIndex = boardSize * (squareSize - 1);
        const lastRowIndex = firstRowIndex + nextRowStep * (squareSize - 1); 
        for (let row = firstRowIndex; row < lastRowIndex; row += nextRowStep)
            for (let index = row; index < row + boardSize; index++)
                horizontalBorderIndexes.push(index);

        return horizontalBorderIndexes;
    }

    getValidValue(value, allowedValues, testMode) {
        return testMode ? 
            value :
            allowedValues.includes(value) ? value : null;
    }

    getAllowedValues(boardSize) {
        let allowedValues, fontSize;
        switch (boardSize) {
            case 9:
                fontSize = "1em";
                allowedValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
                break;
            case 16:
                fontSize = "0.7em";
                allowedValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
                break;
            default:
                fontSize = "1em";
                allowedValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
        }
        return { allowedValues, fontSize };
    }

    render() {
        let validCellValue, borderClasses;
        const { board, boardSize, testMode } = this.props;
        const { allowedValues, fontSize } = this.getAllowedValues(boardSize);
        const horizontalBorderIndexes = this.getHorizontalBorderIndexes(boardSize);
        const verticalBorderIndexes = this.getVerticalBorderIndexes(boardSize);

        return (
            <div 
                className={"board"}
                style={{gridTemplate: `repeat(${boardSize}, 1fr) / repeat(${boardSize}, 1fr)`}}>
                    {board.map((cellValue, cellIndex) => {
                        validCellValue = this.getValidValue(String(cellValue), allowedValues, testMode);
                        borderClasses = "";
                        if (horizontalBorderIndexes.includes(cellIndex)) borderClasses += "border-bottom ";
                        if (verticalBorderIndexes.includes(cellIndex)) borderClasses += "border-left ";
                        return (
                            <Cell
                                key={cellIndex}
                                fontSize={fontSize}
                                borderClasses={borderClasses}
                                value={validCellValue} />
                        )
                    })}
            </div>
        )
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