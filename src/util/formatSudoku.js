const formatSudoku = (board, boardSize) => {
  const arrayToMatrix = (array, rowSize) =>
    array.reduce(
      (rows, key, index) =>
        (index % rowSize === 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows,
      []
    )

  const formatInputCode = (board, boardSize) => {
    const possibleValidInputs = {
      '9': ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      '16': [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
      ]
    }
    const validInputs = possibleValidInputs[boardSize]
    return board.map(value =>
      validInputs.includes(value.toUpperCase()) ? value.toUpperCase() : ' '
    )
  }

  return arrayToMatrix(formatInputCode(Array.from(board), boardSize), boardSize)
}

module.exports = formatSudoku
