<script setup>
import { computed } from 'vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: 'default-class',
  },
})

const activeClass = computed(() => `${props.customClass}__active`)
</script>

<template>
  <div
    :class="[{ [activeClass]: props.isActive }, props.customClass]"
    class="card"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  @apply py-3 px-4 duration-300;
}

.default-class {
  @apply bg-mainColors-card-default-bg 
  border-b-4 border-r-4 border-mainColors-card-default-brd;
}
</style>
