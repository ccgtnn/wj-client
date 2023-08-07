import { defineStore } from 'pinia'
import { Api } from '@/api'
import {
  issueValidator,
  arrayIssueValidator,
} from '@/validators/journal/issue.validator'
import { ref } from 'vue'
import { useErrorsStore } from '@/stores/errors.store'
import dataJson from '@/issues.json'

export const useIssuesStore = defineStore('issues', () => {
  const issuesList = ref([])
  const errorsStore = useErrorsStore()

  // подключаем api
  const api = Api({
    API_URL: 'journal/issue/public',
    validator: issueValidator,
    arrayValidator: arrayIssueValidator,
  })

  const sort = () => issuesList.value.sort((a, b) => a.ord - b.ord)

  const getById = (id) => issuesList.value.find((issue) => issue.id === id)

  const load = async () => {
    try {
      //issuesList.value = await api.load()

      issuesList.value = dataJson

      sort()
    } catch (error) {
      errorsStore.addError({ name: error.name, message: error.message })
    }
  }

  load()

  return {
    issuesList,
    getById,
    load,
  }
})
