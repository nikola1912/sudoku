import { FC } from 'react'

import { cnb } from 'cnbuilder'

import { BoardModel, BoardSize } from '@/modules/sudoku'

import styles from './styles.module.scss'

export type BoardProps = {
  board: BoardModel
  boardSize: BoardSize
}

const Board: FC<BoardProps> = ({ board, boardSize }) => {
  return (
    <div className={styles.board}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.boardRow}>
          {row.map((cellValue, columnIndex) => (
            <div
              key={rowIndex * Number(boardSize) + columnIndex}
              className={cnb(styles.cell, {
                [styles.cellSize9]: boardSize === '9',
                [styles.cellSize16]: boardSize === '16'
              })}
            >
              {cellValue}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export { Board }
