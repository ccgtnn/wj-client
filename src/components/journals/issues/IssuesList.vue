<script setup>
import { ref, inject, nextTick, watch } from 'vue'
import IssuesItem from './IssuesItem.vue'

const yearsOptions = inject('yearsOptions')

const props = defineProps({
  issuesList: {
    type: Array,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})

// Состояние для определения первой загрузки списка
const isFirstOpen = ref(true)

// Задержанное значение состояния открытия
const isOpenDelayed = ref(false)

const issuesListRef = ref(null)

// Функция для задержки обновления значения
const delay = (value, sec) => {
  setTimeout(() => {
    isOpenDelayed.value = value
  }, sec)
}

// Эффект слежения за изменением состояния открытия
watch(
  () => props.isOpen,
  (isOpen) => {
    if (isFirstOpen.value) {
      // Если это первое открытие, примените задержку из yearsOptions
      delay(isOpen, yearsOptions.showDelay)
      isFirstOpen.value = false
      return
    }
    // Если не первое открытие, примените изменения без задержки
    delay(isOpen, 0)
  },
  { immediate: true }
)

// вычисляем конечную высоту элемента перед анимацией, для корректной работы с h-auto
const setHeight = async (type) => {
  await nextTick()
  const element = issuesListRef.value
  if (element) {
    if (type == 'enter') element.style.height = `${element.scrollHeight}px`
    if (type == 'leave') element.style.height = `0px`
  }
}
</script>

<template>
  <!-- Анимация плавного слайд-дауна для списка -->
  <transition
    name="slide-down-issues"
    @before-enter="setHeight('enter')"
    @before-leave="setHeight('leave')"
  >
    <div v-show="isOpenDelayed" ref="issuesListRef" class="issues-list">
      <!-- Отображение каждого элемента списка -->
      <IssuesItem
        v-for="issue in issuesList"
        :key="issue.id"
        :issuesItem="issue"
        class="issues-list__item"
      />
    </div>
  </transition>
</template>

<style scoped>
.issues-list__item {
  @apply p-2 border-b border-mainColors-archive-issueList-brd last:border-none;
}

/* Определение анимации слайд-дауна */

/* Определите стили для начального и конечного состояний анимации */
.slide-down-issues-enter-active,
.slide-down-issues-leave-active {
  @apply transition-all ease-in-out duration-700;
}

/* Начальное состояние для "enter" и конечное состояние для "leave" */
.slide-down-issues-enter-from,
.slide-down-issues-leave-to {
  @apply h-0 overflow-hidden;
}

/* Конечное состояние для "enter" и начальное состояние для "leave" */
.slide-down-issues-enter-to,
.slide-down-issues-leave-from {
  @apply h-auto overflow-hidden;
}
</style>
