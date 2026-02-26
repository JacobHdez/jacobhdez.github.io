<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === 'en-US' ? 'es-MX' : 'en-US';
};
</script>

<template>
  <button
    @click="toggleLanguage"
    class="h-8 w-8 rounded-lg bg-neutral-100 p-2 text-xs text-neutral-900 transition-colors duration-300 hover:bg-neutral-400 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
    aria-label="Toggle Language"
  >
    {{ locale.substring(0, 2).toUpperCase() }}
  </button>
</template>
