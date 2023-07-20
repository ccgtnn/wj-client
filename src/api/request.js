import axios from 'axios'
import { apiUrl, lang } from '@/config'

const http = axios.create({
  baseURL: `${apiUrl}/api/`,
  timeout: 7000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    lang,
  },
})

// обработка запросов сервера
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.authorization = token
    }
    return config
  },
  (error) => Promise.reject(error)
)

// обработка ответов сервера
http.interceptors.response.use(
  (response) => response,
  (error) => {
    // provide more detailed error info
    let errorMessage = 'Ошибка сервера'
    if (error.response && error.response.data) {
      errorMessage = error.response.data.message || errorMessage
    }

    return Promise.reject({
      status: error.response ? error.response.status : 500,
      message: errorMessage,
    })
  }
)

export default http
