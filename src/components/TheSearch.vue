<script setup></script>

<template>
  <div class="search">
    <input placeholder="Поиск" class="search__input" />
  </div>
</template>

<style scoped lang="scss">
.search {
  display: flex;
  align-items: center;
  column-gap: 1rem;

  &__input {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-bottom: 0.625rem;
    padding-top: 0.5rem;
    border-width: 1px;
    border-color: map-get($brd-colors, header-search-input);
    background-color: rgba(map-get($bg-colors, header-search-input), 0.1);
    border-radius: 0.75rem;

    &::placeholder {
      color: rgba(map-get($text-colors, header-search-input-text), 0.5);
    }
  }
}

// .search__input {
//   @apply px-3 pb-2.5 pt-2
//   border border-mainColors-header-search-input-brd bg-mainColors-header-search-input-bg bg-opacity-10
//   text-mainColors-header-search-input-text placeholder-mainColors-header-search-input-text placeholder-opacity-50
//   rounded-xl;
// }

// .search {
//   @apply flex items-center space-x-4;
// }
</style>
