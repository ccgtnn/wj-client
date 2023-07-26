<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useContentsStore } from '@/stores/content.store'

const route = useRoute()

const contentsStore = useContentsStore()

// подгружаем локализацию пунктов меню
const data = computed(() => contentsStore.getByName('main-menu'))

const dropdown = ref(null)

// главное меню
const menuList = computed(() => [
  {
    name: data.value?.about,
    isActive:
      '/indexed /politic_access /politic_personal_data /public_ethic /subscription'.includes(
        route.path
      ) || route.path == '/',
    to: '/',
    menuList: [
      {
        name: 'Общая информация',
        isActive: route.path == '/',
        to: '/',
      },
      {
        name: data.value?.indexed,
        isActive: route.path.includes('indexed'),
        to: '/indexed',
      },
      {
        name: 'Политика открытого доступа',
        isActive: route.path.includes('politic_access'),
        to: '/politic_access',
      },
      {
        name: 'Политика журнала по публикации персональных данных',
        isActive: route.path.includes('politic_personal_data'),
        to: '/politic_personal_data',
      },
      {
        name: 'Публикационная этика',
        isActive: route.path.includes('public_ethic'),
        to: '/public_ethic',
      },
      {
        name: 'Подписка',
        isActive: route.path.includes('subscription'),
        to: '/subscription',
      },
    ],
  },
  {
    name: data.value?.editors,
    isActive: route.path.includes('editorial_board'),
    to: '/editorial_board',
    menuList: [
      {
        name: 'Редакционная коллегия',
        isActive: route.path.includes('editorial_board'),
        to: '/editorial_board',
      },
      {
        name: 'Рецензирование',
        isActive: route.path.includes('recens'),
        to: '/recens',
      },
      {
        name: 'Издательская этика',
        isActive: route.path.includes('ethics'),
        to: '/ethics',
      },
    ],
  },
  {
    name: data.value?.authors,
    isActive: route.path.includes('topics'),
    to: '/topics',
    menuList: [
      {
        name: 'Тематические рубрики',
        isActive: route.path.includes('topics'),
        to: '/topics',
      },
      {
        name: 'Требованиями к оформлению материалов',
        isActive: route.path.includes('req_art'),
        to: '/req_art',
      },
    ],
  },
  {
    name: data.value?.currentIssue,
    isActive: route.path.includes('current_issue'),
    to: '/current_issue',
    menuList: [],
  },
  {
    name: data.value?.archive,
    isActive: route.path.includes('archive'),
    to: '/archive',
    menuList: [],
  },
  {
    name: data.value?.contacts,
    isActive: route.path.includes('contacts'),
    to: '/contacts',
    menuList: [],
  },
])
</script>

<template>
  <nav>
    <ul class="menu-list">
      <li
        v-for="(menuItem, i) in menuList"
        :key="i"
        class="menu-list__item"
        @mouseenter="dropdown = i"
        @mouseleave="dropdown = null"
      >
        <router-link
          v-if="menuItem.menuList?.length === 0"
          :to="menuItem.to"
          class="menu-list__button"
          :class="{ 'menu-list__button_active': menuItem.isActive }"
        >
          {{ menuItem.name }}
        </router-link>
        <button
          v-else
          class="menu-list__button"
          :class="{ 'menu-list__button_active': menuItem.isActive }"
        >
          <span>{{ menuItem.name }}</span>
          <IconCaretDown class="menu-list__caret-icon" />
        </button>

        <!-- Dropdown menu -->
        <transition name="fade">
          <ul v-show="dropdown === i" class="dropdown-menu-list">
            <li v-for="(subItem, j) in menuItem.menuList" :key="`sub-${j}`">
              <router-link
                :to="subItem.to"
                class="dropdown-menu-list__item"
                :class="{ 'dropdown-menu-list__item_active': subItem.isActive }"
              >
                {{ subItem.name }}
              </router-link>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu-list {
  @apply flex gap-4 items-center flex-wrap;
}
.menu-list__item {
  @apply relative;
}
.menu-list__button {
  @apply px-4 pt-1 pb-1.5 
  flex space-x-2
  text-mainColors-header-nav-button-text backdrop-brightness-110
  text-lg rounded-full;
}
.menu-list__button_active {
  @apply bg-mainColors-header-nav-button-bgActive border-none;
}
.menu-list__caret-icon {
  @apply w-3 fill-mainColors-header-nav-button-text;
}
.dropdown-menu-list {
  @apply absolute z-10 pt-2 shadow-lg;
}
li:hover .dropdown-menu-list {
  @apply opacity-100 scale-100;
}
.dropdown-menu-list__item {
  @apply block px-4 py-2 
  bg-mainColors-header-nav-sub-button-bg
  whitespace-nowrap
  hover:bg-mainColors-header-nav-sub-button-bgHover;
}
.dropdown-menu-list__item_active {
  @apply text-mainColors-header-nav-sub-button-textActive bg-mainColors-header-nav-sub-button-bgActive
  hover:bg-mainColors-header-nav-sub-button-bgActive;
}

.fade-enter-active,
.fade-leave-active {
  @apply duration-300 ease-in-out;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
.fade-leave,
.fade-enter-to {
  @apply opacity-100;
}
</style>
