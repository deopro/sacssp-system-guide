<template>
  <div class="app-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Import main CSS file
import '~/assets/css/main.css'
</script>

<style>
/* Global styles */
html {
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

.app-container {
  min-height: 100vh;
  background-color: #f9fafb;
}
</style>