import { BoardSize } from './typings'

export const POSSIBLE_VALID_INPUTS: { [Property in BoardSize]: string[] } = {
  9: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  16: ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
}

export const POSSIBLE_MINIMUM_HINTS: { [Property in BoardSize]: number } = {
  9: 17,
  16: 55
}

export const EMPTY_CELL = ' '
