const validateSudoku = (inputCode, boardSize) => {
  const requiredCodeLength = parseInt(boardSize) ** 2
  return inputCode.length === requiredCodeLength
    ? ''
    : `Input code doesn't contain ${requiredCodeLength} values`
}

module.exports = validateSudoku
