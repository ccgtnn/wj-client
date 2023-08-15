import { defineStore } from 'pinia'
import { Api } from '@/api'
import {
  contentValidator,
  arrayContentValidator,
} from '@/validators/content.validator'
import { ref } from 'vue'
import { useErrorsStore } from '@/stores/errors.store'
import dataJson from '@/ru.data.json'

export const useContentsStore = defineStore('contents', () => {
  const contentsList = ref([])
  const errorsStore = useErrorsStore()

  // подключаем api
  const api = Api({
    API_URL: 'site/content/public',
    validator: contentValidator,
    arrayValidator: arrayContentValidator,
  })

  const getByName = (name) =>
    contentsList.value.find((content) => content.name == name)?.data

  const load = async () => {
    try {
      /*
      let data = await api.load()
      
      // превращаем строку json в объект
      data = data.map((e) => {
        e.data = JSON.parse(e.data)
        return e
      })
      */

      // TEMP
      let data = dataJson

      contentsList.value = data
    } catch (error) {
      errorsStore.addError({ name: error.name, message: error.message })
    }
  }

  load()

  return {
    contentsList,
    getByName,
    load,
  }
})
