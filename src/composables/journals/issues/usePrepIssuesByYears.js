import { computed, provide, ref, watchEffect } from 'vue'
import { useIssuesStore } from '@/stores/journals/issues.store'

export function usePrepIssuesByYears(
  options = {
    showAllIssuesList: false,
    showDelay: 500,
    isDownloadButton: false,
  }
) {
  const issuesStore = useIssuesStore()

  // определяем как ref, чтобы его можно было модифицировать
  const yearsList = ref([])

  // Получаем все данные
  const sortedYearsList = computed(() => {
    // сначала сгруппировать выпуски по годам в объект
    const grouped = issuesStore.issuesList.reduce((groups, issue) => {
      const year = issue.year
      if (!groups[year]) {
        groups[year] = []
      }
      groups[year].push(issue)
      return groups
    }, {})

    // затем преобразовать объект в массив и отсортировать его по годам
    const sorted = Object.entries(grouped)
      .map(([year, issuesList]) => ({
        year,
        issuesList,
        isOpen: options.showAllIssuesList,
      }))
      .sort((a, b) => b.year - a.year)

    // открываем список изданий за ближайший год
    if (sorted[0]) {
      sorted[0].isOpen = true

      // определяем текущий выпуск
      if (sorted[0].issuesList?.length) {
        sorted[0].issuesList[sorted[0].issuesList.length - 1].isCurrent = true
      }
    }
    return sorted
  })

  // при изменении sortedYearsList заполняем им yearsList
  watchEffect(() => {
    yearsList.value = [...sortedYearsList.value]
  })

  // Считаем количество всех записей
  const yearsListCount = computed(() => sortedYearsList.value?.length)

  // Переключаем isOpen в yearsList
  const toggleIsOpen = (year) => {
    const yearsItem = yearsList.value.find((e) => e.year == year)
    if (!yearsItem) return
    yearsItem.isOpen = !yearsItem.isOpen
  }

  provide('yearsList', yearsList)
  provide('yearsListCount', yearsListCount)
  provide('yearsToggleIsOpen', toggleIsOpen)
  provide('yearsOptions', options)

  return {
    yearsList,
    yearsListCount,
  }
}
