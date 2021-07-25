import { FC } from 'react'

import { cnb } from 'cnbuilder'

import { BoardSize, CellModel } from '@/modules/sudoku'

interface CellProps {
  boardSize: BoardSize
  value: CellModel
}

const Cell: FC<CellProps> = ({ boardSize, value }) => {
  return <div className={cnb('board-cell', `board-cell-size${boardSize}`)}>{value}</div>
}

export default Cell
