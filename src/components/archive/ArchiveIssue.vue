<script setup>
import AppNewMark from '../app/AppNewMark.vue'

const props = defineProps({
  year: {
    type: Number,
    default: 2023,
  },
  issueNumber: {
    type: Number,
    default: 1,
  },
  isNew: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="archiveIssue">
    <div class="flex flex-row gap-2">
      <div class="archiveIssue__link">№{{ issueNumber }}, {{ year }}</div>
      <AppNewMark v-if="isNew"><strong>новый</strong></AppNewMark>
    </div>
    <AppButton :isActive="true"> Содержание </AppButton>
  </div>

  <hr class="border-black" />
</template>

<style scoped>
.archiveIssue {
  @apply flex flex-row items-center justify-between
    p-1;
}

.archiveIssue__link {
  @apply text-mainColors-text;
}
</style>
