<script setup>
import { computed } from 'vue'
import { useContentsStore } from '@/stores/content.store'
import { useIssuesStore } from '@/stores/journals/issues.store'

const contentsStore = useContentsStore()
const issuesStore = useIssuesStore()

const data = computed(() => contentsStore.getByName('cuurent-issue-comp'))

const currentAndPrevIssue = computed(() => issuesStore.getCurrentAndPrevIssue())
</script>

<template>
  <div v-if="currentAndPrevIssue[0]" class="current-issue">
    <div class="current-issue__title">
      <AppH1>{{ data?.title }}</AppH1>
    </div>
    <img src="/current-issue.jpg" class="current-issue__img" />
    <div class="current-issue__issue">
      № {{ currentAndPrevIssue[0].number }},
      {{ currentAndPrevIssue[0].year }} год
    </div>
  </div>
</template>

<style scoped>
.current-issue {
  @apply space-y-2;
}
.current-issue__title {
  @apply flex justify-center;
}
.current-issue__issue {
  @apply flex justify-center text-xl;
}
</style>
