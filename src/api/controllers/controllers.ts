import { BoardModel } from '~/modules/sudoku'

import { client } from '../client'

export const scanSudoku = (sudokuImage: File): Promise<BoardModel> => {
  const formData = new FormData()
  formData.append('image', sudokuImage)
  return client.post('/scanner', formData)
}
