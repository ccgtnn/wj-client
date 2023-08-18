<script setup>
import { useRoute } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import IssuesBar from '../components/lastIssuesBar/IssuesBar.vue'

const route = useRoute()
</script>

<template>
  <video autoplay="true" loop="loop" preload="auto" muted="muted" class="video">
    <source src="https://waterjournal.ru/files/water18.mp4" />
  </video>

  <div class="wrap">
    <TheHeader />
    <IssuesBar v-if="route.path == '/'" />
    <main>
      <RouterView></RouterView>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.video {
  @apply hidden md:block fixed top-0 left-0 w-full 
  overflow-y-visible opacity-40 -z-10;
}
.wrap {
  @apply h-screen flex flex-col items-center;
}
main {
  @apply w-full flex-grow bg-mainColors-bg;
}
</style>
