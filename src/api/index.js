import request from './request'
import * as yup from 'yup'

function validateResponse(response, validator) {
  // проверка наличия данных
  if (!response.data) throw new Error('API_NOT_LOAD')

  // валидация данных с сервера
  try {
    const validData = validator.validateSync(response.data, {
      stripUnknown: true,
      abortEarly: false,
    })
    return validData
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      throw new Error(`API_NOT_VALID: ${error.message}`)
    }
    throw new Error('API_ERROR')
  }
}

export function Api({ API_URL, validator, arrayValidator }) {
  async function load() {
    const response = await request.get(API_URL)
    return validateResponse(response, arrayValidator)
  }

  return { load }
}
