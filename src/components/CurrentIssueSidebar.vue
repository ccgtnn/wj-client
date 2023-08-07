<script setup>
import { computed } from 'vue'
import { useContentsStore } from '@/stores/content.store'

const contentsStore = useContentsStore()

const data = computed(() => contentsStore.getByName('cuurent-issue-comp'))
</script>

<template>
  <div class="last-issue">
    <div class="last-issue__title">
      <AppH1>{{ data?.title }}</AppH1>
    </div>
    <img src="last-issue.jpg" class="last-issue__img" />
    <div class="last-issue__issue">№3, 2023 год</div>
  </div>
</template>

<style scoped>
.last-issue {
  @apply space-y-2;
}
.last-issue__title {
  @apply flex justify-center;
}
.last-issue__issue {
  @apply flex justify-center text-xl;
}
</style>
