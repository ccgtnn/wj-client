<script setup>
import { computed } from 'vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  isDisable: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: 'default-button',
  },
})

// устанавливаем для кнопки необходимые классы
const buttonClass = computed(() => {
  const activeClass = props.isActive ? `${props.customClass}__active` : ''
  const disableClass = props.isDisable ? `${props.customClass}__disable` : ''

  return `${props.customClass} ${activeClass} ${disableClass}`
})
</script>

<template>
  <button :class="buttonClass" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
.default-button {
  @apply px-2 pt-1 pb-1.5 
  bg-mainColors-button-default-bg text-mainColors-button-text-text 
  rounded-sm duration-300
  hover:bg-mainColors-button-default-bgHover;
}
.default-button__active {
  @apply bg-mainColors-button-default-bgActive;
}
.default-button__disable {
  @apply opacity-50;
}

.download-button {
  @apply px-2 pt-1 pb-1.5 
  bg-mainColors-button-download-bg text-mainColors-button-text-text 
  rounded-sm duration-300
  hover:bg-mainColors-button-download-bgHover;
}
.download-button__active {
  @apply bg-mainColors-button-default-bgActive;
}
.download-button__disable {
  @apply opacity-50;
}

.text-button {
  @apply text-mainColors-button-text-text border-b border-mainColors-button-text-brd 
  hover:text-mainColors-button-text-textActive hover:border-mainColors-button-text-brdActive;
}
.text-button__active {
  @apply font-bold;
}
.text-button__disable {
  @apply opacity-50;
}

.icon-button {
  @apply font-normal text-mainColors-button-icon-text 
  hover:text-mainColors-button-text-textActive;
}
.icon-button__active {
  @apply text-mainColors-button-icon-textActive;
}
.icon-button__disable {
  @apply opacity-50;
}
</style>
