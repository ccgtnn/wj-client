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
const menuList = computed(() =>
  data.value.map((item) => {
    const IsChildPathsExsits = item.menuList?.some(
      (item) => item.path == route.path
    )

    const isActive = (e) => {
      return e.menuList ? IsChildPathsExsits : route.path == e.path
    }

    return {
      title: item?.title,
      isActive: isActive(item),
      path: item?.path,
      menuList: item?.menuList?.map((subItem) => {
        return {
          title: subItem?.title,
          isActive: isActive(subItem),
          path: subItem?.path,
        }
      }),
    }
  })
)
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
          v-if="!menuItem.menuList?.length"
          :to="menuItem.path"
          class="menu-list__button"
          :class="{ 'menu-list__button_active': menuItem.isActive }"
        >
          {{ menuItem.title }}
        </router-link>

        <button
          v-else
          class="menu-list__button"
          :class="{ 'menu-list__button_active': menuItem.isActive }"
        >
          <span>{{ menuItem.title }}</span>
          <IconCaretDown class="menu-list__caret-icon" />
        </button>

        <!-- Dropdown menu -->
        <transition name="fade-dropdown-menu">
          <ul v-if="dropdown === i" class="dropdown-menu-list">
            <li
              v-for="(subItem, j) in menuItem.menuList"
              :key="`sub-${j}`"
              class="dropdown-menu-list__item"
            >
              <router-link
                :to="subItem.path"
                class="dropdown-menu-list__button"
                :class="{
                  'dropdown-menu-list__button_active': subItem.isActive,
                }"
                @click="dropdown = null"
              >
                {{ subItem.title }}
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
  @apply flex gap-4 items-center justify-center flex-wrap;
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
.dropdown-menu-list__item {
  @apply border-b border-mainColors-header-nav-sub-brd last:border-none;
}
.dropdown-menu-list__button {
  @apply block px-4 py-2 
  bg-mainColors-header-nav-sub-button-bg
  whitespace-nowrap
  hover:bg-mainColors-header-nav-sub-button-bgHover;
}
.dropdown-menu-list__button_active {
  @apply text-mainColors-header-nav-sub-button-textActive bg-mainColors-header-nav-sub-button-bgActive
  hover:bg-mainColors-header-nav-sub-button-bgActive;
}

.fade-dropdown-menu-enter-active,
.fade-dropdown-menu-leave-active {
  @apply transition-all duration-200 ease-in-out opacity-0;
}
.fade-dropdown-menu-enter,
.fade-dropdown-menu-leave-to {
  @apply opacity-0;
}
.fade-dropdown-menu-enter-to,
.fade-dropdown-menu-leave {
  @apply opacity-100;
}
</style>
