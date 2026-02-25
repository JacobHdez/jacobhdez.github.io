<script setup lang="ts">
import Home from './views/Home.vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <div
    class="flex flex-row bg-neutral-100 antialiased transition-colors duration-1000 dark:bg-neutral-900"
  >
    <Header />

    <div class="flex min-h-screen flex-1 flex-col">
      <main class="grow">
        <Home />
      </main>

      <Footer />
    </div>
  </div>
</template>
