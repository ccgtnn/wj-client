<script setup>
import { computed } from 'vue'
import { useIssuesStore } from '@/stores/journals/issues.store'
import IssuesItem from './IssuesItem.vue'

const issuesStore = useIssuesStore()

const currentAndPrevIssue = computed(() => issuesStore.getCurrentAndPrevIssue())
</script>

<template>
  <div class="current-prev-issue">
    <div class="current-prev-issue__left">
      <img src="/journ1.png" width="200" alt="Обложка журанала" />
      <IssuesItem
        v-if="currentAndPrevIssue[0]"
        title="Последний выпуск"
        :issues-item="currentAndPrevIssue[0]"
      />
    </div>
    <div class="current-prev-issue__right">
      <IssuesItem
        v-if="currentAndPrevIssue[1]"
        title="Предыдущий выпуск"
        :issues-item="currentAndPrevIssue[1]"
      />
    </div>
  </div>
</template>

<style scoped>
.current-prev-issue {
  @apply py-4 flex gap-6 items-center justify-center
  w-full
  bg-mainColors-header-bg
  bg-opacity-5
  md:gap-60 md:flex-row;
}
.current-prev-issue__left {
  @apply flex flex-row items-center gap-6;
}
.current-prev-issue__right {
  @apply hidden md:block;
}
img {
  @apply hidden sm:block;
}
</style>
