import { FC } from 'react'

import { cnb } from 'cnbuilder'

import { BoardSize, CellModel } from '@/modules/sudoku'

export interface CellProps {
  boardSize: BoardSize
  value: CellModel
}

export const Cell: FC<CellProps> = ({ boardSize, value }) => {
  return <div className={cnb('board-cell', `board-cell-size${boardSize}`)}>{value}</div>
}
