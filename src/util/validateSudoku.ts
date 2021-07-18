import { BoardModel, BoardSize } from '../typings'

const checkLength = (board: BoardModel, requiredBoardLength: number) => {
  const boardLength = board.reduce((acc, row) => acc + row.length, 0)

  return boardLength !== requiredBoardLength
    ? `Input code doesn't contain ${requiredBoardLength} values`
    : ''
}

const checkHints = (board: BoardModel, boardSize: BoardSize) => {
  const hintsInRow = (row: string[]) => row.filter((x) => x !== ' ').length

  const possibleMinimumHints = { 9: 17, 16: 55 }
  const minHints = possibleMinimumHints[boardSize]
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
