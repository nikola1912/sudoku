import { FC } from 'react'

import { BoardModel, BoardSize } from '../typings'

interface BoardProps {
  board: BoardModel
  boardSize: BoardSize
}

interface CellProps {
  boardSize: BoardSize
  value: string
}

const Board: FC<BoardProps> = ({ board, boardSize }) => {
  return (
    <div className={'board'}>
      {board.map((row: any[], rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((cellValue, columnIndex) => (
            <Cell
              key={rowIndex * Number(boardSize) + columnIndex}
              value={cellValue}
              boardSize={boardSize}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

const Cell: FC<CellProps> = ({ boardSize, value }) => {
  return <div className={`board-cell board-cell-size${boardSize}`}>{value}</div>
}

export default Board
