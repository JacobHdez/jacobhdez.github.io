<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSafeT } from '@/composables/useSafeT';
import { personalData } from '@/data/personal';
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

const { t, d } = useI18n();
const { safeT } = useSafeT();

const formattedAbout = computed(() => {
  return Object.entries(personalData.about).map(([key, value]) => {
    let displayValue: string;

    if (key === 'birthday') {
      displayValue = d(new Date(value), 'short');
    } else {
      displayValue = safeT(`personal.about.${value}`, value);
    }

    return { key, label: t(`about.${key}`), value: displayValue };
  });
});
</script>

<template>
  <div id="about" class="mx-auto max-w-7xl">
    <section class="px-4 py-8">
      <h2>
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

      <ul class="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 lg:grid-cols-2">
        <li
          v-for="item in formattedAbout"
          :key="item.key"
          class="flex flex-row items-center gap-x-1 font-light transition-all duration-1000 dark:font-extralight"
        >
          <ChevronRightIcon class="h-4 w-4 text-gray-700" />
          <span class="font-semibold">{{ item.label }}:</span>{{ item.value }}
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
