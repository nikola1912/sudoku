import { FC } from 'react'

import { BoardModel, BoardSize } from '@/modules/sudoku'

import { Cell } from '../Cell'

export interface BoardProps {
  board: BoardModel
  boardSize: BoardSize
}

export const Board: FC<BoardProps> = ({ board, boardSize }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
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
