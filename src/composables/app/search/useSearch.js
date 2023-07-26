import { ref, computed } from 'vue'
import { useErrorsStore } from '@/stores/errors.store'

export function useSearch(fieldsConcatenator) {
  const searchQuery = ref('')
  const errorsStore = useErrorsStore()

  // Активность поиска зависит от наличия текста в поле поиска
  const isActive = computed(() => searchQuery.value.trim().length > 0)

  const check = (item) => {
    // Если поиск не активен, сразу возвращаем true
    if (!isActive.value) return true

    // Получаем строку, состоящую из всех полей, которые мы хотим использовать для поиска
    const searchString = fieldsConcatenator(item)

    // Обработка исключений: убедитесь, что searchString  является строкой
    if (typeof searchString !== 'string') {
      errorsStore.addError({ message: 'search error, got search not string' })
      return false
    }

    return searchString.toLowerCase().includes(searchQuery.value.toLowerCase())
  }

  const setSearchQuery = (value) => {
    searchQuery.value = value
  }

  return {
    searchQuery,
    isActive,
    check,
    setSearchQuery,
  }
}
