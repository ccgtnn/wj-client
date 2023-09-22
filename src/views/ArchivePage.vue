<script setup>
import { computed } from 'vue'
import { useContentsStore } from '@/stores/content.store'
import { usePrepIssuesByYears } from '@/composables/journals/issues/usePrepIssuesByYears'
import MajorEditorSidebar from '@/components/MajorEditorSidebar.vue'
import CurrentIssueSidebar from '@/components/CurrentIssueSidebar.vue'
import YearsList from '@/components/journals/issues/YearsList.vue'

const contentsStore = useContentsStore()

const data = computed(() => contentsStore.getByName('archive-page'))

usePrepIssuesByYears({
  showAllIssuesList: true,
  showDelay: 300,
  isDownloadButton: true,
})
</script>

<template>
  <div class="page">
    <div class="page__left">
      <div class="page__title">
        <AppH1>{{ data?.title }}</AppH1>
      </div>
      <YearsList />
    </div>
    <div class="page__right">
      <CurrentIssueSidebar />
      <hr />
      <MajorEditorSidebar />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  @include container(true);

  @media (min-width: map-get($screen-widths, md)) {
    display: flex;
    justify-content: center;
  }

  &__left {
    display: flex;
    flex-direction: column;
    flex-basis: 75%;
  }

  &__right {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    flex-basis: 25%;
    padding: 1rem;
    background-color: map-get($bg-colors, content);

    @media (min-width: map-get($screen-widths, md)) {
      margin-left: 1em;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

// .page {
//   @apply container mx-auto;
//   md:flex md:justify-center md:space-x-4;;
// }

// .page__left {
//   @apply basis-3/4;
// }
// .page__right {
//   @apply basis-1/4 p-4 space-y-4 bg-mainColors-content-right-bg;
// }
// .page__title {
//   @apply py-4 flex justify-center;
// }
</style>
