<script setup lang="ts">
import ThemeToggle from '../ui/ThemeToggle.vue';
</script>

<template>
  <header class="relative w-xs">
    <div class="absolute inset-0">
      <div class="sticky top-0 bottom-0 left-0 flex h-screen flex-col px-4 py-2">
        <div class="grow overflow-y-auto"></div>

        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  </header>
</template>
