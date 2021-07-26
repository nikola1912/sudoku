import { rest } from 'msw'

import { API_URL } from '@/configs/environment'

const handlers = [
  rest.post(`${API_URL}/scanner`, (_, res, ctx) => {
    return res(
      ctx.json([
        [0, 3, 0, 0, 0, 0, 0, 5, 0],
        [0, 0, 8, 0, 9, 1, 3, 0, 0],
        [6, 0, 0, 4, 0, 0, 7, 0, 0],
        [0, 0, 3, 8, 1, 0, 0, 0, 0],
        [0, 0, 6, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 0, 3, 4, 8, 0, 0],
        [0, 0, 1, 0, 4, 8, 0, 0, 9],
        [0, 0, 4, 1, 2, 0, 6, 0, 0],
        [0, 6, 0, 0, 0, 0, 0, 4, 0]
      ])
    )
  })
]

export { handlers }
