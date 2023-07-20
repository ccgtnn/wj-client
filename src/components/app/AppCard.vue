<script setup>
import { computed } from 'vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: 'outline-class',
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
.light-class {
  @apply bg-card-light-bg border-t border-card-light-brd rounded-xl shadow-md;
}
.light-class__active {
  @apply bg-card-light-bgActive;
}

.dark-class {
  @apply bg-card-dark-bg border-y-2 border-card-dark-brd;
}
.dark-class__active {
  @apply bg-card-dark-bgActive;
}

.outline-class {
  @apply border-2 border-card-outline-brd rounded-xl;
}
.outline-class__active {
  @apply border-card-outline-brdActive;
}
</style>
