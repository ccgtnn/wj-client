<script setup>
import { computed } from 'vue'
import MajorEditor from '@/components/MajorEditor.vue'
import IssuesLast from '@/components/journals/issues/IssuesLast.vue'
import IssuesList from '@/components/journals/issues/IssuesList.vue'
import { useContentsStore } from '@/stores/content.store'
import { usePrepIssuesByYears } from '@/composables/journals/issues/usePrepIssuesByYears'

const contentsStore = useContentsStore()

const data = computed(() => contentsStore.getByName('archive-page'))

usePrepIssuesByYears()
</script>

<template>
  <div class="page">
    <div class="page__left">
      <div class="page__title">
        <AppH1>{{ data?.title }}</AppH1>
      </div>
      <IssuesList />
    </div>
    <div class="page__right">
      <IssuesLast />
      <hr />
      <MajorEditor />
    </div>
  </div>
</template>

<style scoped>
.page {
  @apply container mx-auto 
  md:flex md:justify-center md:space-x-4;
}
.page__left {
  @apply basis-3/4;
}
.page__right {
  @apply basis-1/4 p-4 space-y-4 bg-mainColors-content-right-bg;
}
.page__title {
  @apply py-4 flex justify-center;
}
</style>
