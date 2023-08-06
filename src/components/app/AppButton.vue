<script setup>
import { computed } from 'vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  isPassive: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: 'default-class',
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})
const activeClass = computed(() => `${props.customClass}__active`)
const passviveClass = computed(() => `${props.customClass}__passive`)
</script>

<template>
  <button
    v-if="!isLoading"
    :class="[
      { [activeClass]: isActive },
      { [passviveClass]: isPassive },
      customClass,
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
  <button v-else :class="customClass">LOADING</button>
</template>

<style scoped>
.default-class {
  @apply px-2 pt-1 pb-1.5 
  bg-mainColors-button-default-bg shadow-lg rounded-md 
  text-mainColors-button-text-text
  hover:shadow-none;
}
.default-class__active {
  @apply bg-mainColors-button-default-bgActive shadow-none;
}
.default-class__passive {
  @apply border border-dashed bg-opacity-0 
  shadow-none;
}

.text-class {
  @apply text-mainColors-button-text-text border-b border-mainColors-button-text-brd 
  hover:text-mainColors-button-text-textActive hover:border-mainColors-button-text-brdActive;
}
.text-class__active {
  @apply font-bold;
}
.text-class__passive {
  @apply opacity-50;
}

.icon-class {
  @apply font-normal text-mainColors-button-icon-text 
  hover:text-mainColors-button-text-textActive;
}
.icon-class__active {
  @apply text-mainColors-button-icon-textActive;
}
.icon-class__passive {
  @apply opacity-50;
}
</style>
