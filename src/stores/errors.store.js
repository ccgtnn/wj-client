import { defineStore } from 'pinia'
import { ref } from 'vue'

/** Обработчик ошибок */
export const useErrorsStore = defineStore('errors', () => {
  const errorsList = ref([])

  const addError = (error) => {
    errorsList.value.unshift(error)
  }

  return { errorsList, addError }
})
