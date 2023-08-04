<script setup>
import { computed } from 'vue'
import { useContentsStore } from '@/stores/content.store'
import ArchiveYear from './ArchiveYear.vue'

const contentsStore = useContentsStore()

const data = computed(() => contentsStore.getByName('archive-issues'))
const lastYear = data.value[0]
data.value.shift()
</script>

<template>
  <div class="archive">
    <ArchiveYear :year-data="lastYear" :is-active="true" />
    <div v-for="item in data" class="archive__year">
      <ArchiveYear :year-data="item" />
    </div>
  </div>
</template>

<style scoped>
.archive {
  @apply flex flex-col
          py-4;
}
</style>
