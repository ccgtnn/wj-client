<script setup></script>

<template>
  <div class="search">
    <input placeholder="Поиск" class="search__input" />
  </div>
</template>

<style scoped>
.search {
  @apply flex items-center space-x-4;
}
.search__input {
  @apply px-3 pb-2.5 pt-2 
  border border-mainColors-header-search-input-brd bg-mainColors-header-search-input-bg bg-opacity-10 
  text-mainColors-header-search-input-text placeholder-mainColors-header-search-input-text placeholder-opacity-50
  rounded-xl;
}
</style>
