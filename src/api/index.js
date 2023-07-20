import request from './request'

function validateResponse(response, scheme) {
  // проверка наличия данных
  if (!response.data) throw new Error('API_NOT_LOAD')

  // валидация данных с сервера
  const { error } = scheme.validate(response.data, {
    stripUnknown: true,
  })

  if (error) {
    throw new Error(`API_NOT_VALID: ${error.details[0].message}`)
  }

  return response.data
}

export function Api({ API_URL, scheme, arrayScheme }) {
  async function load() {
    const response = await request.get(API_URL)
    return validateResponse(response, arrayScheme)
  }

  return { load }
}
