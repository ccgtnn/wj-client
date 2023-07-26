<script setup>
import { inject } from 'vue'
import IssuesItem from './IssuesItem.vue'

const yearsList = inject('issuesYearsList')
const yearsListCount = inject('issuesYearsListCount')
</script>

<template>
  <div class="issues-list">
    <div v-for="year in yearsList" :key="year.name">
      <AppH2>{{ year.name }}</AppH2>
      <IssuesItem
        v-for="issue in year.issuesList"
        :key="issue.id"
        :issuesItem="issue"
      />
    </div>
  </div>
  <div v-if="yearsListCount == 0" class="">ПОКА НЕТ ЗАГРУЖЕННЫХ ИЗДАНИЙ</div>
</template>

<style scoped>
.issues-list {
  @apply space-y-2;
}
</style>
