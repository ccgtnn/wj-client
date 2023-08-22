<script setup>
import { inject } from 'vue'
import NewMark from '@/components/NewMark.vue'

defineProps({
  issuesItem: {
    type: Object,
    required: true,
  },
})

const yearsOptions = inject('yearsOptions')
</script>

<template>
  <div class="issues-item">
    <div class="issues-item__name">
      № {{ issuesItem.number }}, {{ issuesItem.year }} год
    </div>
    <NewMark v-if="issuesItem.isCurrent" />
    <div class="issues-item__actions">
      <AppButton class="issues-item__content-button">Содержание</AppButton>
      <AppButton
        v-if="yearsOptions.isDownloadButton"
        custom-class="download-button"
        class="issues-item__download-button"
      >
        Скачать полный выпуск
      </AppButton>
    </div>
  </div>
</template>

<style scoped>
.issues-item {
  @apply flex gap-2 justify-between items-center;
}
.issues-item__name {
  @apply text-mainColors-archive-issueItem-text
  border-b border-transparent
  cursor-pointer
  hover:text-mainColors-archive-issueItem-textHover 
  hover:border-mainColors-archive-issueItem-brdHover;
}
.issues-item__actions {
  @apply flex space-x-2 items-center;
}
</style>
