import { arrayToMatrix } from '../helpers/arrayToMatrix'
import { BoardImportCode, BoardModel, BoardSize } from '../typings'

const formatInputCode = (inputCodeArray: BoardImportCode[], boardSize: BoardSize) => {
  const possibleValidInputs = {
    9: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    16: ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  }
  const validInputs = possibleValidInputs[boardSize]
  return inputCodeArray.map((value) =>
    validInputs.includes(value.toUpperCase()) ? value.toUpperCase() : ' '
  )
}

const formatSudoku = (inputCode: BoardImportCode, boardSize: BoardSize): BoardModel => {
  const formattedInputCode = formatInputCode(Array.from(inputCode), boardSize)
  const formattedSudoku = arrayToMatrix(formattedInputCode, Number(boardSize))

  return formattedSudoku
}

export { formatSudoku }
