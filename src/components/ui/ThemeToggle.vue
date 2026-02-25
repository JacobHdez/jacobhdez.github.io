<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button
    @click="toggleTheme"
    class="h-10 w-10 rounded-lg bg-neutral-200 p-2 transition-colors duration-300 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
    aria-label="Toggle Dark Mode"
  >
    <SunIcon v-if="isDark" />
    <MoonIcon v-else />
  </button>
</template>
