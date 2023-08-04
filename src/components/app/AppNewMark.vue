<template>
  <div class="newMark">
    <slot></slot>
  </div>
</template>

<style scoped>
.newMark {
  @apply p-1
    text-sm
    bg-mainColors-newMark-bg
    rounded-lg;
}
</style>
