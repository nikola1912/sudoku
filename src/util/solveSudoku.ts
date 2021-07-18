import { BoardModel, BoardSize } from '../typings'
import { arrayToMatrix } from '../helpers/arrayToMatrix'

const solveBoard = (board: number[], boardSize: number) => {
  const CHUNK_SIZE = Math.sqrt(boardSize)
  const ROW_COL_SIZE = CHUNK_SIZE * CHUNK_SIZE
  const SIZE = ROW_COL_SIZE * ROW_COL_SIZE

  const checkRow = (board: number[], number: number, index: number) => {
    const start = Math.floor(index / ROW_COL_SIZE) * ROW_COL_SIZE
    for (let i = 0; i < ROW_COL_SIZE; i += 1) {
      if (board[start + i] === number) {
        return false
      }
    }
    return true
  }

  const checkCol = (board: number[], number: number, index: number) => {
    const start = index % ROW_COL_SIZE
    for (let i = 0; i < ROW_COL_SIZE; i += 1) {
      if (board[start + i * ROW_COL_SIZE] === number) {
        return false
      }
    }
    return true
  }

  const check3x3 = (board: number[], number: number, index: number) => {
    const start =
      index -
      ((index % ROW_COL_SIZE) % CHUNK_SIZE) -
      ROW_COL_SIZE * (Math.floor(index / ROW_COL_SIZE) % CHUNK_SIZE)
    for (let i = 0; i < ROW_COL_SIZE; i += 1) {
      if (
        board[
          start + ROW_COL_SIZE * Math.floor(i / CHUNK_SIZE) + (i % CHUNK_SIZE)
        ] === number
      ) {
        return false
      }
    }
    return true
  }

  const check = (board: number[], number: number, index: number) =>
    checkRow(board, number, index) &&
    checkCol(board, number, index) &&
    check3x3(board, number, index)

  const recursiveSolve = (board: number[], index: number): boolean => {
    if (index >= SIZE) {
      return true
    } else if (board[index] !== 0) {
      return recursiveSolve(board, index + 1)
    }

    for (let number = 1; number <= ROW_COL_SIZE; number += 1) {
      if (check(board, number, index)) {
        board[index] = number
        if (recursiveSolve(board, index + 1)) {
          return true
        }
      }
    }

    board[index] = 0

    return false
  }

  if (!recursiveSolve(board, 0)) throw new Error('Puzzle could not be solved.')

  return board
}

const formatInput = (board: BoardModel): number[] =>
  board
    .reduce((acc, row) => [...acc, ...row], [])
    .map(value => (value === ' ' ? 0 : Number(value)))

const formatOutput = (board: number[], boardSize: BoardSize): BoardModel =>
  arrayToMatrix(
    board.map(value => (value === 0 ? ' ' : value.toString())),
    Number(boardSize)
  )

const solveSudoku = (board: BoardModel, boardSize: BoardSize) => {
  const formattedBoard = formatInput(board)
  const solvedBoard = solveBoard(formattedBoard, Number(boardSize))
  const formattedSolvedBoard = formatOutput(solvedBoard, boardSize)

  return formattedSolvedBoard
}

export { solveSudoku }
