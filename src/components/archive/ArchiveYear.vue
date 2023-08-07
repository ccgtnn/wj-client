<script setup>
import { ref } from 'vue'
import ArchiveIssue from './ArchiveIssue.vue'
import ArchiveYearBox from './ArchiveYearBox.vue'
const props = defineProps({
  yearData: {
    type: Object,
    default: {},
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="archiveYear">
    <ArchiveYearBox @click="isActive = !isActive" :active="isActive">
      <strong>{{ yearData.year }}</strong>
    </ArchiveYearBox>
    <div class="issues__list" :class="{ 'issues__list-active': isActive }">
      <div v-for="issue in yearData.issues">
        <ArchiveIssue
          :issue-number="issue.number"
          :is-new="issue.isNew"
          :year="yearData.year"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.issues__list {
  @apply max-h-0
    overflow-hidden
    transition-all ease-in-out delay-75 duration-1000;
}
.issues__list-active {
  @apply max-h-72;
}

/* .slide-enter-from {
  @apply max-h-0
    overflow-hidden;
}
.slide-enter-to {
  @apply max-h-48;
}

.slide-enter-active {
  @apply transition-all delay-75 duration-1000;
} */
</style>
