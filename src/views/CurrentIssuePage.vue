<script setup>
import { computed } from 'vue'
import MajorEditor from '@/components/MajorEditor.vue'
import ArchiveSidebar from '@/components/archive/ArchiveSidebar.vue'
import { useContentsStore } from '@/stores/content.store'
import SomeTest from '../components/SomeTest.vue'

const contentsStore = useContentsStore()

const data = computed(() => contentsStore.getByName('current-issue-page'))
</script>

<template>
  <div class="page">
    <div class="page__left">
      <div class="page__title">
        <AppH1>{{ data?.title }}</AppH1>
      </div>
      <SomeTest />
    </div>
    <div class="page__right">
      <ArchiveSidebar />
      <MajorEditor />
    </div>
  </div>
</template>

<style scoped>
.page {
  @apply container mx-auto md:flex md:justify-center;
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
