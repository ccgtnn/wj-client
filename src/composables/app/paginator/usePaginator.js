import { reactive, computed, watch } from 'vue'

export function usePaginator(itemsPerPage) {
  // Определяем начальное состояние пагинации
  const state = reactive({
    currentPage: 0, // Текущая страница
    totalItems: 0, // Всего элементов
    itemsPerPage, // Элементов на страницу
  })

  // Вычисляем общее количество страниц
  const totalPages = computed(() => {
    return Math.ceil(state.totalItems / state.itemsPerPage)
  })

  // Вычисляем количество элементов на текущей странице
  const itemsOnPageCount = computed(() => {
    const start = state.currentPage * state.itemsPerPage
    const remaining = state.totalItems - start
    return Math.min(state.itemsPerPage, remaining)
  })

  // Функция для перехода на указанную страницу
  const goToPage = (page) => {
    if (page >= 0 && page < totalPages.value) {
      state.currentPage = page
    }
  }

  // Функция для установки общего количества элементов
  const setTotalItems = (totalItems) => {
    state.totalItems = totalItems
  }

  // Отслеживаем изменения в состоянии пагинации и, если необходимо, сбрасываем текущую страницу в 0
  watch(state, () => {
    if (state.currentPage >= totalPages.value) {
      goToPage(0)
    }
  })

  // Возвращаем объект с данными и методами пагинации
  return {
    state,
    totalPages,
    itemsOnPageCount,
    goToPage,
    setTotalItems,
  }
}
