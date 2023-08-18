<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: { id: 23, name: '№ 4', year: '2023', ord: 4 },
  },
  title: {
    type: String,
    default: 'Неизветно',
  },
  issueHyperlink: {
    type: String,
    default: 'https://waterjournal.ru/',
  },
  contentHyperlink: {
    type: String,
    default: 'https://waterjournal.ru/',
  },
})
</script>

<template>
  <div class="issue-item">
    <div class="issue-item__title">
      {{ title }}
    </div>
    <div class="issue-item__link">
      <a class="a-regular" :href="issueHyperlink"
        >{{ data.name }}, {{ data.year }} год</a
      >
    </div>
    <div class="btns">
      <a :href="contentHyperlink">
        <AppButton> Содержание </AppButton>
      </a>
      <AppButton> Оформить подписку</AppButton>
    </div>
  </div>
</template>

<style scoped>
.issue-item {
  @apply flex flex-col space-y-3;
}
.issue-item__title {
  @apply text-2xl text-mainColors-header-issuesBar-text;
}

.issue-item__link {
  @apply text-xl text-mainColors-header-issuesBar-link;
}

.btns {
  @apply flex flex-row space-x-4;
}
</style>
