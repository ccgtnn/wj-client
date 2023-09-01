<script setup>
import { computed } from 'vue'
import MajorEditorSidebar from '@/components/MajorEditorSidebar.vue'
import { useContentsStore } from '@/stores/content.store'

const contentsStore = useContentsStore()

const data = computed(() => contentsStore.getByName('public-ethic'))
</script>

<template>
  <div class="page">
    <div class="page__left">
      <div class="page__title">
        <AppH1>{{ data?.title }}</AppH1>
      </div>
    </div>
    <div class="page__right">
      <MajorEditorSidebar />
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
