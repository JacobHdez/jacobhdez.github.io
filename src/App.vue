<script setup lang="ts">
import Home from './views/Home.vue';
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <div class="flex min-h-screen flex-row bg-neutral-100 font-sans antialiased dark:bg-neutral-900">
    <Header />

    <div class="z-0 flex min-h-screen flex-1 flex-col">
      <main class="content grow text-neutral-900 dark:text-neutral-100">
        <Home />
      </main>

      <Footer />
    </div>
  </div>
</template>
