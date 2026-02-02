<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import type { Project } from '../data/projects';

const props = defineProps<{ project: Project }>();

const { locale, t } = useI18n();
const currentLocale = computed( () => locale.value as 'en' | 'es' );
</script>

<template>
<div class="bg-gray-900 border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full hover:border-rose-950/40 transition-all duration-300 group">
  <div class="relative aspect-video overflow-hidden">
    <img
      :src="project.image"
      :alt="project.title[currentLocale]"
      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
    >

    <div class="absolute inset-0 bg-linear-to-t from-bg-gray-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-4">
      <span class="text-white text-xs font-bold uppercase tracking-widest">
        {{ t('header.about') }}
      </span>
    </div>
  </div>

  <div class="p-6 flex flex-col grow">
    <div class="flex justify-between items-start mb-2">
      <span class="text-xs uppercase tracking-widest text-rose-950 font-black italic">
        {{ project.category === 'Programming' ? t('categories.prog') : t('categories.games') }}
      </span>
    </div>

    <h3 class="text-xl font-bold text-gray-200 mb-3">
      {{ project.title[currentLocale] }}
    </h3>

    <p class="text-gray-400 text-sm leading-relaxed mb-6 grow">
      {{ project.description[currentLocale] }}
    </p>

    <div class="flex flex-wrap gap-2 mb-6">
      <span
        v-for="tech in project.tech" :key="tech"
        class="text-xs bg-gray-950 text-gray-400 px-2 py-1 rounded-md border border-white/10 font-mono"
      >
        {{ tech }}
      </span>
    </div>

    <div class="flex gap-3 pt-4 border-t border-white/10">
      <a
        v-if="project.links?.web"
        :href="project.links.web"
        target="_blank"
        class="flex-1 flex items-center justify-center gap-2 bg-rose-950 hover:bg-rose-950/80 text-gray-200 py-2 rounded-lg text-xs font-bold transition-colors"
      >
        <span><i class="fa-solid fa-globe"></i></span>
        {{ t('card.web') }}
      </a>
      <a
        v-if="project.links?.code"
        :href="project.links.code"
        target="_blank"
        class="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-gray-200 py-2 rounded-lg text-xs font-bold transition-colors"
      >
        <span><i class="fa-solid fa-code"></i></span>
        {{ t('card.code') }}
      </a>
    </div>
  </div>
</div>
</template>
