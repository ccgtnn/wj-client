<script setup></script>

<template>
  <div class="contacts">
    <div class="contacts__data"></div>
    <iframe
      src="https://yandex.ru/map-widget/v1/-/CBqS5MdvlA"
      width="100%"
      height="600"
      frameborder="0"
      class="contacts__map"
    ></iframe>
  </div>
</template>

<style scoped>
.contacts__data {
  @apply p-4;
}
</style>
