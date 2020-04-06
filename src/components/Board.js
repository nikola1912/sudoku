import React from 'react';

class Board extends React.Component {

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
        let validCellValue;
        const { board, boardSize, testMode } = this.props;
        const { allowedValues, fontSize } = this.getAllowedValues(boardSize);
        const squareSize = boardSize**(1/2);

        return (
            <div 
                className={"board"}
                style={{gridTemplate: `repeat(${boardSize}, 1fr) / repeat(${boardSize}, 1fr)`}}>
                    {board.map((row, rowIndex) => row.map((cellValue, columnIndex) => {
                        validCellValue = this.getValidValue(String(cellValue), allowedValues, testMode);
                        return (
                            <Cell 
                                key={rowIndex * boardSize + columnIndex} 
                                fontSize={fontSize} 
                                value={validCellValue}
                                borderClasses={"" +
                                    (columnIndex % squareSize === 0 ? "border-left " : "") +
                                    (rowIndex % squareSize === 0 ? "border-top " : "")} />
                        );
                    }))}
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