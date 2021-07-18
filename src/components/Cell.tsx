import { FC } from 'react'

import { BoardSize, CellModel } from 'modules/sudoku'

interface CellProps {
  boardSize: BoardSize
  value: CellModel
}

const Cell: FC<CellProps> = ({ boardSize, value }) => {
  return <div className={`board-cell board-cell-size${boardSize}`}>{value}</div>
}

export default Cell
