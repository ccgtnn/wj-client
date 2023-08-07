<script setup>
import { computed } from 'vue'
import { usePrepIssuesByYears } from '@/composables/journals/issues/usePrepIssuesByYears'
import { useContentsStore } from '@/stores/content.store'
import YearsList from '@/components/journals/issues/YearsList.vue'

const contentsStore = useContentsStore()

const data = computed(() => contentsStore.getByName('archive-comp'))

usePrepIssuesByYears({
  showAllIssuesList: false,
  showDelay: 500,
  isDownloadButton: false,
})
</script>

<template>
  <div class="archive">
    <div class="archive__title">
      <AppH1>{{ data?.title }}</AppH1>
    </div>
    <YearsList />
  </div>
</template>

<style scoped>
.archive {
  @apply space-y-2;
}
.archive__title {
  @apply mb-4 flex justify-center;
}
</style>
