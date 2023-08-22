<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  issuesItem: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="issue-item">
    <div class="issue-item__title">
      {{ title }}
    </div>
    <div class="issue-item__link">
      <a class="a-regular">
        № {{ issuesItem.number }}, {{ issuesItem.year }} год
      </a>
    </div>
    <div class="issue-item__actions">
      <AppButton> Содержание </AppButton>
      <AppButton> Оформить подписку</AppButton>
    </div>
  </div>
</template>

<style scoped>
.issue-item {
  @apply space-y-3;
}
.issue-item__title {
  @apply text-2xl text-mainColors-header-issuesBar-text;
}

.issue-item__link {
  @apply text-xl text-mainColors-header-issuesBar-link;
}

.issue-item__actions {
  @apply flex gap-4;
}

a {
  @apply hover:border-b;
}
</style>
