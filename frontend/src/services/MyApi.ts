import axios from 'axios'

export const myApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

