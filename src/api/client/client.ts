import axios from 'axios'

import { API_URL } from '@/configs/environment'

export const client = axios.create({ baseURL: API_URL })

client.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)
