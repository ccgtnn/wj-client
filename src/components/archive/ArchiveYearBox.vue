<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <h2 :class="{ 'box-active': active }">
    <slot></slot>
    <Transition name="caret">
      <IconCaretDoubleDown v-if="!active" />
    </Transition>
  </h2>
</template>

<style scoped>
h2 {
  @apply px-4 py-2
  flex flex-row justify-between
    border-l-4 border-mainColors-archiveBox-brd bg-mainColors-archiveBox-bgActive
    duration-300 font-bold text-lg
    hover:border-l-8;
}
IconCaretDoubleDown {
  @apply p-2 w-6
    scale-50;
}

.box-active {
  @apply bg-mainColors-archiveBox-bg;
}

.caret-enter-from,
.caret-leave-to {
  @apply opacity-0;
}

.caret-enter-to,
.caret-leave-from {
  @apply opacity-100;
}

.caret-enter-active,
.caret-leave-active {
  @apply transition-all ease-in-out duration-1000 delay-75;
}
</style>
