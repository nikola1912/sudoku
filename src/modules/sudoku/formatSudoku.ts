import { arrayToMatrix } from '~/utils/helpers'

import { EMPTY_CELL, POSSIBLE_VALID_INPUTS } from './constants'
import { BoardImportCode, BoardModel, BoardSize } from './typings'

const formatInputCode = (inputCodeArray: BoardImportCode[], boardSize: BoardSize) => {
  const validInputs = POSSIBLE_VALID_INPUTS[boardSize]

  return inputCodeArray.map((value) =>
    validInputs.includes(value.toUpperCase()) ? value.toUpperCase() : EMPTY_CELL
  )
}

const formatSudoku = (inputCode: BoardImportCode, boardSize: BoardSize): BoardModel => {
  const formattedInputCode = formatInputCode(Array.from(inputCode), boardSize)
  const formattedSudoku = arrayToMatrix(formattedInputCode, Number(boardSize))

  return formattedSudoku
}

export { formatSudoku }
