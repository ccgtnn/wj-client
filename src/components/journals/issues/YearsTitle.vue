<script setup>
import { ref, watchEffect, inject } from 'vue'

const yearsOptions = inject('yearsOptions')

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
})

// Переменные состояния для контроля анимации и задержки
const isFirstOpen = ref(true) // Указывает, открыт ли компонент в первый раз
const isActiveDelayed = ref(false) // Задержанное значение isActive

// Функция для задержки обновления значения с заданным временем
const delay = (value, sec) => {
  setTimeout(() => {
    isActiveDelayed.value = value
  }, sec)
}

// Эффект отслеживания для управления задержкой активации
watchEffect(() => {
  if (isFirstOpen.value) {
    delay(props.isActive, yearsOptions.showDelay) // Если это первое открытие, используйте задержку из yearsOptions
    isFirstOpen.value = false
    return
  }
  delay(props.isActive, 0) // Иначе обновите значение без задержки
})
</script>

<template>
  <!-- Контейнер для заголовка года -->
  <div :class="{ 'years-title_active': isActiveDelayed }" class="years-title">
    <!-- Слот для внедрения дополнительного содержимого -->
    <slot></slot>
    <!-- Иконка удвоенного стрелочного индикатора -->
    <IconCaretDoubleDown
      :class="{ 'years-title__icon-caret_active': isActiveDelayed }"
      class="years-title__icon-caret"
    />
  </div>
</template>

<style scoped>
.years-title {
  @apply px-3 py-2 
  flex flex-row justify-between
  border-l-4 border-mainColors-archive-yearTitle-brd bg-mainColors-archive-yearTitle-bg
  duration-500 text-lg font-semibold cursor-pointer
  hover:border-l-8;
}

.years-title_active {
  @apply pl-4
   bg-mainColors-archive-yearTitle-bgActive;
}

.years-title__icon-caret {
  @apply w-3 duration-500;
}

.years-title__icon-caret_active {
  @apply opacity-0;
}
</style>
