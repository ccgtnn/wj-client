<script setup>
import { computed } from 'vue'
import { useContentsStore } from '@/stores/content.store'

const contentsStore = useContentsStore()

const data = computed(() => contentsStore.getByName('new-mark-comp'))
</script>

<template>
  <div class="new-mark">
    {{ data.text }}
  </div>
</template>

<style scoped>
.new-mark {
  @apply px-1.5 py-1 inline text-xs bg-mainColors-newMark-bg rounded-lg;
}
</style>
