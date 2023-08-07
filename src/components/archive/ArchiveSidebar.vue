<script setup>
import ArchiveYear from './ArchiveYear.vue'
import data from '../../issues.json'

const lastYear = data[0]
data.shift()
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
