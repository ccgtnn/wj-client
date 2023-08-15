import axios from 'axios'

const http = axios.create({
  baseURL: `${import.meta.env.VITE_APP_API}/api/`,
  timeout: 7000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  params: {
    lang: import.meta.env.VITE_APP_LANG,
  },
})

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
