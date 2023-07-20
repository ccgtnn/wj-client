<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useContentsStore } from '@/stores/content.store'

const route = useRoute()

const contentsStore = useContentsStore()

// подгружаем локализацию пунктов меню
const data = computed(() => contentsStore.getByName('main-menu'))

// главное меню
const menuList = computed(() => [
  {
    name: data.value?.about,
    isActive: route.path.includes('about'),
    to: '/about',
    menuList: [
      {
        name: 'Общая информация',
        isActive: route.path.includes('about'),
        to: '/about',
      },
      {
        name: 'Индексация журнала',
        isActive: route.path.includes('indexed'),
        to: '/indexed',
      },
      {
        name: 'Политика открытого доступа',
        isActive: route.path.includes('politic_access'),
        to: '/politic_access',
      },
    ],
  },
  {
    name: data.value?.editors,
    isActive: route.path.includes('editorial_board'),
    to: '/editorial_board',
  },
  {
    name: data.value?.authors,
    isActive: route.path.includes('topics'),
    to: '/topics',
  },
  {
    name: data.value?.currentIssue,
    isActive: route.path.includes('current_issue'),
    to: '/current_issue',
  },
  {
    name: data.value?.archive,
    isActive: route.path.includes('archive'),
    to: '/archive',
  },
  {
    name: data.value?.contacts,
    isActive: route.path.includes('contacts'),
    to: '/contacts',
  },
])
</script>

<template>
  <nav>
    <ul class="menu-list">
      <li v-for="(menuItem, i) in menuList" :key="i">
        <router-link
          :to="menuItem.to"
          class="menu-button"
          :class="{ 'menu-button_active': menuItem.isActive }"
        >
          {{ menuItem.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu-list {
  @apply flex space-x-4 items-center;
}
.menu-button {
  @apply px-4 pt-1 pb-1.5 
  text-header-nav-button-text backdrop-brightness-110
  text-lg rounded-full;
}
.menu-button_active {
  @apply bg-header-nav-button-bgActive border-none;
}
</style>
