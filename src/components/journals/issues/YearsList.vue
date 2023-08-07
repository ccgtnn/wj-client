<script setup>
import { ref, inject, onMounted } from 'vue'
import IssuesList from './IssuesList.vue'
import YearsTitle from './YearsTitle.vue'

const yearsList = inject('yearsList')
const yearsListCount = inject('yearsListCount')
const yearsToggleIsOpen = inject('yearsToggleIsOpen')

const isOpenDelayed = ref(false)

onMounted(() => {
  isOpenDelayed.value = true
})
</script>

<template>
  <transition name="slide-down-years">
    <div v-if="isOpenDelayed" class="years-list">
      <div v-for="item in yearsList" :key="item.year">
        <YearsTitle
          :isActive="item.isOpen"
          @click="yearsToggleIsOpen(item.year)"
        >
          {{ item.year }}
        </YearsTitle>
        <IssuesList :isOpen="item.isOpen" :issuesList="item.issuesList" />
      </div>
    </div>
  </transition>

  <div v-if="yearsListCount == 0" class="_sub-text">
    ПОКА НЕТ ЗАГРУЖЕННЫХ ИЗДАНИЙ
  </div>
</template>

<style scoped>
.years-list {
  @apply space-y-2;
}

/* Определите стили для начального и конечного состояний анимации */
.slide-down-years-enter-active,
.slide-down-years-leave-active {
  @apply transition-all ease-in-out duration-1000;
}

/* Начальное состояние для "enter" и конечное состояние для "leave" */
.slide-down-years-enter-from,
.slide-down-years-leave-to {
  @apply max-h-0 overflow-hidden;
}

/* Конечное состояние для "enter" и начальное состояние для "leave" */
.slide-down-years-enter-to,
.slide-down-years-leave-from {
  @apply max-h-[1000px] overflow-hidden;
}
</style>
