<script setup></script>

<template>
  <footer>
    <div class="footer">
      <div class="footer__rosniivh rosniivh">
        <img src="logo1.png" class="rosniivh__logo" />
        <div class="rosniivh__name">
          Федеральное государственное бюджетное учреждение Российский
          научно-исследовательский институт комплексного использования и охраны
          водных ресурсов (ФГБУ РосНИИВХ)
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply w-full p-4 bg-footer-bg text-footer-text;
}
.footer {
  @apply container mx-auto;
}
.rosniivh {
  @apply flex items-center space-x-4;
}
.rosniivh__logo {
  @apply w-12;
}
.rosniivh__name {
  @apply text-sm;
}
</style>
