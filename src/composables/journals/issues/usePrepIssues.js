import { useIssuesStore } from '@/stores/journals/issues.store'
import { computed, provide } from 'vue'

export function usePrepIssues(options = {}) {
  const issuesStore = useIssuesStore()

  // Получаем все данные
  const yearsList = computed(() => {
    // сначала сгруппировать выпуски по годам
    let grouped = issuesStore.issuesList.reduce((groups, issue) => {
      const year = issue.year
      if (!groups[year]) {
        groups[year] = []
      }
      groups[year].push(issue)
      return groups
    }, {})

    // затем преобразовать объект в массив и отсортировать его по годам
    let sorted = Object.entries(grouped)
      .map(([name, issuesList]) => ({ name, issuesList }))
      .sort((a, b) => b.name - a.name)

    return sorted
  })

  // Считаем количество всех записей
  const yearsListCount = computed(() => yearsList.value?.length)

  provide('issuesYearsList', yearsList)
  provide('issuesYearsListCount', yearsListCount)

  return {
    yearsList,
    yearsListCount,
  }
}
