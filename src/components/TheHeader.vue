<script setup>
import { computed } from 'vue'
import TheNav from '../components/TheNav.vue'
import TheSearch from '../components/TheSearch.vue'

// получаем текущий язык из переменных окружения
const lang = computed(() => import.meta.env.VITE_APP_LANG)

const switchLanguage = (newLang) => {
  const newUrl = window.location.href.replace(/\/\/(en|ru)\./, `//${newLang}.`)
  window.location.href = newUrl
}
</script>

<template>
  <header>
    <div class="top">
      <div class="top__right">
        <div class="top__icons icons">
          <img
            src="/icon-ru.jpg"
            :class="[lang == 'ru' ? 'w-8' : 'w-5']"
            @click="switchLanguage('ru')"
            class="icons__img"
          />
          <img
            src="/icon-en.jpg"
            :class="[lang == 'en' ? 'w-8' : 'w-5']"
            @click="switchLanguage('en')"
            class="icons__img"
          />
        </div>
        <div class="top__isbn">
          ISSN 1999-4508 (Print)<br />
          ISSN 2686-8253 (Online)
        </div>
      </div>

      <router-link to="/" class="top__title title">
        <div class="title__line1">Научно-практический журнал</div>
        <div class="title__line2">
          «Водное хозяйство России: проблемы, технологии, управление»
        </div>
      </router-link>

      <TheSearch class="top__search" />
    </div>
    <TheNav class="nav" />
  </header>
</template>

<style scoped>
header {
  @apply container;
}
.top {
  @apply relative h-60;
}
.top__right {
  @apply absolute top-5 right-5 flex flex-col items-center space-y-2;
}
.top__icons {
  @apply flex items-center space-x-4;
}
.top__isbn {
  @apply text-mainColors-header-top-isbn-text text-xs;
}
.top__title {
  @apply absolute top-20 left-1/2 transform -translate-x-1/2;
}
.title {
  @apply w-full flex flex-col items-center space-y-1 
  text-mainColors-header-top-title-text text-center
  cursor-pointer;
}
.title__line1 {
  @apply text-base md:text-xl;
}
.title__line2 {
  @apply text-xl md:text-3xl;
}
.top__search {
  @apply absolute top-44 left-1/2 transform -translate-x-1/2;
}
.nav {
  @apply py-6 flex justify-center;
}
.icons__img {
  @apply cursor-pointer;
}
</style>
