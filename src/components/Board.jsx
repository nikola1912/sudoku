import React from 'react'
import PropTypes from 'prop-types'

const Board = ({ board, boardSize }) => (
  <div className={'board'}>
    {board.map((row, rowIndex) => (
      <div className="board-row" key={rowIndex}>
        {row.map((cellValue, columnIndex) => (
          <Cell
            key={rowIndex * boardSize + columnIndex}
            value={cellValue}
            boardSize={boardSize}
          />
        ))}
      </div>
    ))}
  </div>
)

const Cell = ({ boardSize, value }) => (
  <div className={`board-cell board-cell-size${boardSize}`}>{value}</div>
)

Board.propTypes = {
  board: PropTypes.array,
  boardSize: PropTypes.string
}

Cell.propTypes = {
  boardSize: PropTypes.string,
  value: PropTypes.string
}

export default Board
