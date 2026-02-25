<script setup lang="ts">
import Home from '@/views/Home.vue';
import Header from '@/components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
</script>

<template>
  <div
    class="flex flex-row bg-neutral-100 text-neutral-950 antialiased dark:bg-neutral-950 dark:text-neutral-100"
  >
    <Header />

    <div class="flex min-h-screen flex-1 flex-col px-4 py-2">
      <main class="grow">
        <Home />
      </main>

      <Footer />
    </div>
  </div>
</template>
