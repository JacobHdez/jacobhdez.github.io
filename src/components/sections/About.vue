<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useSafeT } from '@/composables/useSafeT';
import { personalData } from '@/data/personal';
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

const { t, d } = useI18n();
const { safeT } = useSafeT();

const formatters: Record<string, (val: any) => string> = {
  birthday: (val: string) => {
    return d(new Date(val), 'short');
  }
};
const useFormatter = (key: string, value: string) => {
  const formatter = formatters[key];
  return formatter ? formatter(value) : safeT(`personal.about.${value}`, value);
};
</script>

<template>
  <div id="about">
    <section class="px-4 py-8">
      <h2 class="">
        {{ t('nav.about') }}
      </h2>
      <div class="mt-2 w-16 border-t-4 border-gray-700"></div>

      <p class="mt-4" v-if="personalData.shortDescriptionKey">
        {{ t(`personal.${personalData.shortDescriptionKey}`) }}
      </p>
    </section>

    <section class="mx-auto flex max-w-2xl flex-col items-center px-4 py-8">
      <div class="relative aspect-square h-64 w-64 overflow-hidden">
        <img
          :src="personalData.portrait"
          :alt="personalData.name"
          class="h-full w-full object-cover"
        />
        <div
          class="absolute inset-0 bg-black/30 transition-all duration-1000 dark:bg-black/60"
        ></div>
      </div>

      <h3 class="mt-4">
        {{ t(`personal.roles.${personalData.mainRoleKey}`) }}
      </h3>

      <ul class="mt-4 grid grid-cols-2 gap-x-8 gap-y-2">
        <li
          v-for="(value, key) in personalData.about"
          :key="key"
          class="flex flex-row items-center gap-x-1"
        >
          <ChevronRightIcon
            class="h-4 w-4 text-gray-900 transition-colors duration-1000 dark:text-gray-700"
          />
          <span class="font-semibold">{{ t(`about.${key}`) }}:</span>
          {{ useFormatter(key, value) }}
        </li>
      </ul>

      <p
        class="mt-8"
        v-for="(text, index) in t(`personal.${personalData.descriptionKey}`).split('\n')"
        :key="index"
      >
        {{ text }}
      </p>
    </section>
  </div>
</template>

<style scoped>
@reference "@/assets/css/main.css";

h2 {
  @apply text-3xl font-semibold text-neutral-900 transition-colors duration-1000 dark:text-neutral-100;
}
h3 {
  @apply text-2xl font-semibold text-neutral-900 transition-colors duration-1000 dark:text-neutral-100;
}
p {
  @apply text-lg leading-relaxed font-light text-neutral-900 transition-all duration-1000 dark:font-extralight dark:text-neutral-100;
}
li {
  @apply leading-relaxed font-light text-neutral-900 transition-all duration-1000 dark:font-extralight dark:text-neutral-100;
}
</style>
