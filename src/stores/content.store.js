import { defineStore } from 'pinia'
import { Api } from '@/api'
import { contentSchema, arrayContentSchema } from '../schemes/content.scheme'
import { ref } from 'vue'
import { useErrorsStore } from '@/stores/errors.store'

export const useContentsStore = defineStore('contents', () => {
  const contentsList = ref([])
  const errorsStore = useErrorsStore()

  // подключаем api
  const api = Api({
    API_URL: 'site/content/public',
    scheme: contentSchema,
    arrayScheme: arrayContentSchema,
  })

  const getByName = (name) =>
    contentsList.value.find((content) => content.name == name)?.data

  const load = async () => {
    try {
      let data = await api.load()

      // превращаем строку json в объект
      data = data.map((e) => {
        e.data = JSON.parse(e.data)
        return e
      })

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
