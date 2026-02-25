<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import ThemeToggle from '../ui/ThemeToggle.vue';
import LanguageToggle from '../ui/LanguageToggle.vue';

const { t } = useI18n();
</script>

<template>
  <header class="relative w-2xs bg-neutral-900 transition-colors duration-1000 dark:bg-neutral-950">
    <div class="absolute inset-0">
      <div class="sticky top-0 bottom-0 left-0 flex h-screen flex-col">
        <div class="grow overflow-y-auto p-4">
          <section class="flex flex-col items-center">
            <div>IMAGE</div>

            <h2 class="text-center text-xl font-bold text-neutral-100">Jacobo Hernández Varela</h2>

            <div>SOCIAL</div>
          </section>

          <nav class="text-neutral-100">
            <a href="/">{{ t('nav.home') }}</a>
          </nav>
        </div>

        <div class="flex flex-row items-center justify-between border-t border-neutral-100/30 p-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </div>
  </header>
</template>
