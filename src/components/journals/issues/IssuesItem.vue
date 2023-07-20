<script setup>
defineProps({
  issuesItem: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="issues-item">
    <div class="issues-item__name">
      №{{ issuesItem.name }}, {{ issuesItem.year }}
    </div>
  </div>
</template>

<style scoped>
.issues-item {
  @apply p-2;
}
</style>
