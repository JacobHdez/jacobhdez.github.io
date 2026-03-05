<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSafeT } from '@/composables/useSafeT';
import { aboutData } from '@/data/about';
import { ChevronRightIcon } from '@heroicons/vue/24/solid';

const { t, d } = useI18n();
const { safeT } = useSafeT();

const formattedAbout = computed(() => {
  return Object.entries(aboutData.about).map(([key, value]) => {
    let displayValue: string;

    if (key === 'birthday') {
      displayValue = d(new Date(value), 'short_dm');
    } else {
      displayValue = safeT(`data.about.${value}`, value);
    }

    return { key, label: t(`about.${key}`), value: displayValue };
  });
});
</script>

<template>
  <div id="about" class="mx-auto max-w-7xl px-4 py-8">
    <section>
      <h2>
        {{ t('nav.about') }}
      </h2>
      <div class="mt-2 w-16 border-t-4 border-gray-700"></div>

      <p class="mt-4 text-lg" v-if="aboutData.shortDescriptionKey">
        {{ t(`data.about.${aboutData.shortDescriptionKey}`) }}
      </p>
    </section>

    <section class="mx-auto mt-8 flex max-w-2xl flex-col items-center">
      <div class="relative aspect-square h-64 w-64 overflow-hidden">
        <img :src="aboutData.portrait" :alt="aboutData.name" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-black/30 dark:bg-black/60"></div>
      </div>

      <h3 class="mt-4">
        {{ t(`data.home.roles.${aboutData.mainRoleKey}`) }}
      </h3>

      <ul class="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 lg:grid-cols-2">
        <li
          v-for="item in formattedAbout"
          :key="item.key"
          class="flex flex-row items-center gap-x-1 font-light dark:font-extralight"
        >
          <ChevronRightIcon class="h-4 w-4 text-gray-700" />
          <span class="font-semibold">{{ item.label }}:</span>{{ item.value }}
        </li>
      </ul>
      <div class="relative mt-4 font-light dark:font-extralight">
        <div v-if="aboutData.available.status" class="absolute top-0 -left-2.5 inline-flex size-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-700 opacity-75"></span>
          <span class="relative inline-flex h-full w-full rounded-full bg-gray-700"></span>
        </div>

        <a v-if="aboutData.available.status" href="#contact" class="hover:underline">
          {{ t(`data.about.${aboutData.available.yesKey}`) }}
        </a>
        <span v-else>{{ t(`data.about.${aboutData.available.noKey}`) }}</span>
      </div>

      <p class="mt-8 text-lg" v-for="(text, index) in t(`data.about.${aboutData.descriptionKey}`).split('\n')" :key="index">
        {{ text }}
      </p>
    </section>
  </div>
</template>
