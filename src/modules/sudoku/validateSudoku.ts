import { EMPTY_CELL, POSSIBLE_MINIMUM_HINTS } from './constants'
import { BoardModel, BoardModelCompound, BoardSize } from './typings'

const checkLength = (board: BoardModelCompound, requiredBoardLength: number) => {
  const boardLength = board.reduce((acc, row) => acc + row.length, 0)

  return boardLength !== requiredBoardLength
    ? `Input code doesn't contain ${requiredBoardLength} values`
    : ''
}

const checkHints = (board: BoardModelCompound, boardSize: BoardSize) => {
  const hintsInRow = (row: string[]) => row.filter((x) => x !== EMPTY_CELL).length

  const minHints = POSSIBLE_MINIMUM_HINTS[boardSize]
  const hintsInBoard = board.reduce((acc, row) => acc + hintsInRow(row), 0)

  return hintsInBoard < minHints
    ? `Sudoku of ${boardSize}x${boardSize} size must contain at least ${minHints} hints`
    : ''
}

const validateSudoku = (board: BoardModel, boardSize: BoardSize) => {
  const lengthCheck = checkLength(board, Number(boardSize) ** 2)
  const hintCheck = checkHints(board, boardSize)

  return lengthCheck || hintCheck
}

export { validateSudoku }
