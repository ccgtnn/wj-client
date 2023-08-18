<script setup>
import { computed } from 'vue'
import { useIssuesStore } from '@/stores/journals/issues.store'
import IssueItem from './IssueItem.vue'

const issuesStore = useIssuesStore()

const currentAndPrevIssue = computed(() => issuesStore.getCurrentAndPrevIssue())
</script>

<template>
  <div class="current-prev-issue">
    <div class="current-prev-issue__left">
      <img src="/journ1.png" alt="actual" />
      <IssueItem
        title="Последний выпуск"
        :data="currentAndPrevIssue[0]"
        issueHyperlink="/"
      />
    </div>

    <IssueItem
      title="Предыдущий выпуск"
      :data="currentAndPrevIssue[1]"
      issueHyperlink="/"
      contentHyperlink="/"
    />
  </div>
</template>

<style scoped>
.current-prev-issue {
  @apply py-4 flex flex-row gap-5 items-start justify-center
  w-full 
  md:gap-60 md:flex-row;
}
.current-prev-issue__left {
  @apply flex flex-row items-start gap-6;
}
img {
  @apply w-60 hidden md:flex;
}
</style>
