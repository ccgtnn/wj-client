import { defineStore } from 'pinia'
import { Api } from '@/api'
import {
  issueSchema,
  arrayIssueSchema,
} from '../../schemes/journal/issue.scheme'
import { ref } from 'vue'
import { useErrorsStore } from '@/stores/errors.store'

export const useIssuesStore = defineStore('issues', () => {
  const issuesList = ref([])
  const errorsStore = useErrorsStore()

  // подключаем api
  const api = Api({
    API_URL: 'journal/issue/public',
    scheme: issueSchema,
    arrayScheme: arrayIssueSchema,
  })

  const sort = () => issuesList.value.sort((a, b) => b.ord - a.ord)

  const getById = (id) => issuesList.value.find((issue) => issue.id === id)

  const load = async () => {
    try {
      issuesList.value = await api.load()
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
