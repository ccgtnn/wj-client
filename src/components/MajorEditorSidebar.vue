<script setup>
import { computed } from 'vue'
import { useContentsStore } from '@/stores/content.store'

const contentsStore = useContentsStore()

const data = computed(() => contentsStore.getByName('major-editor-comp'))
</script>

<template>
  <div class="major-editor">
    <div class="major-editor__title">
      <AppH1>{{ data?.title }}</AppH1>
    </div>
    <img src="/major-editor.jpg" class="major-editor__img" />
    <div class="major-editor__name">{{ data?.name }}</div>
    <div class="major-editor__text">{{ data?.text }}</div>
  </div>
</template>

<style scoped>
.major-editor {
  @apply space-y-2;
}
.major-editor__title {
  @apply mb-4 flex justify-center;
}
.major-editor__name {
  @apply font-semibold;
}
.major-editor__text {
  @apply opacity-80 italic;
}
</style>
