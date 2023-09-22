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

<style scoped lang="scss">
.menu-list {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  &__item {
    position: relative;
  }

  &__button {
    @include text-lg;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.25rem;
    padding-bottom: 0.375rem;
    display: flex;
    column-gap: 0.5rem;
    color: map-get($text-colors, header-nav-button);
    background-color: rgba(map-get($bg-colors, header), 0.05);
    border-radius: 9999px;
  }

  &__button_active {
    background-color: map-get($bg-colors, header-nav-button-active);
    border: none;
  }

  &__caret-icon {
    width: 0.75rem;
    fill: map-get($text-colors, header-nav-button);
  }
}

.dropdown-menu-list {
  @include shadow-lg;
  position: absolute;
  z-index: 10;
  padding-top: 0.5rem;

  &__item {
    border-bottom-width: 1px;
    border-color: map-get($brd-colors, header-nav-sub);

    &:last-child {
      border: none;
    }
  }

  &__button {
    display: block;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-color: map-get($bg-colors, header-nav-sub-button);
    white-space: nowrap;

    &:hover {
      background-color: map-get($bg-colors, header-nav-sub-button-hover);
    }

    &_active {
      color: map-get($text-colors, header-nav-sub-button-active);
      background-color: map-get($bg-colors, header-nav-sub-button-active);

      &:hover {
        background-color: map-get($bg-colors, header-nav-sub-button-active);
      }
    }
  }
}

.fade-dropdown-menu {
  &-enter-active,
  &-leave-active {
    transition: all;
    transition-duration: 200ms;
    @include ease-in-out;
    opacity: 0;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &-enter-to,
  &-menu-leave {
    opacity: 100%;
  }
}

// .menu-list {
//   @apply flex gap-4 items-center justify-center flex-wrap;
// }
// .menu-list__item {
//   @apply relative;
// }
// .menu-list__button {
//   @apply px-4 pt-1 pb-1.5
//   flex space-x-2
//   text-mainColors-header-nav-button-text
//   bg-mainColors-header-bg bg-opacity-5
//   text-lg rounded-full;
// }
// .menu-list__button_active {
//   @apply bg-mainColors-header-nav-button-bgActive border-none;
// }
// .menu-list__caret-icon {
//   @apply w-3 fill-mainColors-header-nav-button-text;
// }
// .dropdown-menu-list {
//   @apply absolute z-10 pt-2 shadow-lg;
// }
// .dropdown-menu-list__item {
//   @apply border-b border-mainColors-header-nav-sub-brd last:border-none;
// }
// .dropdown-menu-list__button {
//   @apply block px-4 py-2
//   bg-mainColors-header-nav-sub-button-bg
//   whitespace-nowrap
//   hover:bg-mainColors-header-nav-sub-button-bgHover;
// }
// .dropdown-menu-list__button_active {
//   @apply text-mainColors-header-nav-sub-button-textActive bg-mainColors-header-nav-sub-button-bgActive
//   hover:bg-mainColors-header-nav-sub-button-bgActive;
// }

// .fade-dropdown-menu-enter-active,
// .fade-dropdown-menu-leave-active {
//   @apply transition-all duration-200 ease-in-out opacity-0;
// }
// .fade-dropdown-menu-enter,
// .fade-dropdown-menu-leave-to {
//   @apply opacity-0;
// }
// .fade-dropdown-menu-enter-to,
// .fade-dropdown-menu-leave {
//   @apply opacity-100;
// }
</style>
