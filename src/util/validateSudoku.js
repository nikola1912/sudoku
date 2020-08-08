const validateSudoku = (board, boardSize) => {
  const checkLength = (board, requiredBoardLength) => {
    const boardLength = board.reduce((acc, row) => acc + row.length, 0)
    return boardLength !== requiredBoardLength
      ? `Input code doesn't contain ${requiredBoardLength} values`
      : ''
  }

  const checkHints = (board, boardSize) => {
    const hintsInRow = row => row.filter(x => x !== ' ').length
    const possibleMinimumHints = { '9': 17, '16': 55 }
    const minHints = possibleMinimumHints[boardSize]
    const hintsInBoard = board.reduce((acc, row) => acc + hintsInRow(row), 0)
    return hintsInBoard < minHints
      ? `Sudoku of ${boardSize}x${boardSize} size must contain at least ${minHints} hints`
      : ''
  }

  const lengthCheck = checkLength(board, parseInt(boardSize) ** 2)
  const hintCheck = checkHints(board, boardSize)

  return lengthCheck || hintCheck
}

module.exports = validateSudoku
