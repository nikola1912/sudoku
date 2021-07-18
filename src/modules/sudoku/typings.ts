import { Tuple } from 'utils/typings'

import { EMPTY_CELL } from './constants'

type Cell9x9 = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | typeof EMPTY_CELL
type Cell16x16 =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | typeof EMPTY_CELL

type Board9x9 = Tuple<Tuple<Cell9x9, 9>, 9>
type Board16x16 = Tuple<Tuple<Cell16x16, 16>, 16>

export type BoardModel = Board9x9 | Board16x16
// Higher order methods trigger error `ts(2349)` when used on `BoardModel` arrays.
// `BoardModelCompound` allows use of higher order methods on arrays.
export type BoardModelCompound = string[][]
export type BoardSize = '9' | '16'
export type BoardDifficulty = 'easy' | 'medium' | 'hard'
// TODO: Rename `code` to `seed`
export type BoardImportMode = 'code' | 'image'
// TODO: Rename to `BoardImportSeed`
export type BoardImportCode = string
