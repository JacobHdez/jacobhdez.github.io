<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

const { isDark, toggleTheme } = useTheme();
</script>

<template>
  <button
    @click="toggleTheme"
    class="h-8 w-8 rounded-lg bg-neutral-100 p-2 text-neutral-900 transition-colors duration-300 hover:bg-neutral-400 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
    aria-label="Toggle Dark Mode"
  >
    <SunIcon v-if="isDark" />
    <MoonIcon v-else />
  </button>
</template>
