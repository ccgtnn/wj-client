<script setup>
import { computed } from 'vue'
import { useIssuesStore } from '@/stores/journals/issues.store'

const issuesStore = useIssuesStore()

const currentAndPrevIssue = computed(() => issuesStore.getCurrentAndPrevIssue())
</script>

<template>
  <div class="current-prev-issue">
    <div class="">{{ currentAndPrevIssue }}</div>
  </div>
</template>

<style scoped>
.current-prev-issue {
  @apply w-full py-4 flex justify-center;
}
</style>
