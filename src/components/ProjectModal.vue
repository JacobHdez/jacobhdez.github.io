<script setup lang="ts">
import { computed, watch, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

import type { Project } from '../data/projects';

const props = defineProps<{
  project: Project | null;
  isOpen: boolean;
}>();

const emit = defineEmits(['close']);
const { locale, t } = useI18n();
const currentLocale = computed( () => locale.value as 'en' | 'es' );

watch(
  () => props.isOpen,
  ( open ) => {
    document.body.style.overflow = open ? 'hidden' : '';
  }
);

const onKeydown = ( e: KeyboardEvent ) => {
  if ( e.key === 'Escape' && props.isOpen ) {
    emit('close');
  }
};

onMounted( () => {
  window.addEventListener('keydown', onKeydown);
} );

onUnmounted( () => {
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onKeydown);
} );
</script>

<template>
<Transition
  enter-active-class="transition-all duration-300 ease-out"
  enter-from-class="opacity-0 scale-95"
  enter-to-class="opacity-100 scale-100"
  leave-active-class="transition-all duration-200 ease-in"
  leave-from-class="opacity-100 scale-100"
  leave-to-class="opacity-0 scale-95"
>
  <div
    v-if="isOpen && project"
    class="fixed inset-0 z-100 flex items-center justify-center p-4"
  >
    <div
      class="absolute inset-0 bg-gray-950/95 backdrop-blur-sm"
      @click="emit('close')"
    ></div>

    <div class="relative bg-gray-900 border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row">
      <div class="md:w-1/2 h-64 md:h-auto bg-gray-800">
        <img
          :src="project.image"
          class="w-full h-full object-cover"
        >
      </div>

      <div class="md:w-1/2 p-8 md:p-12">
        <button
          @click="emit('close')"
          class="absolute top-6 right-6 text-gray-400 hover:text-rose-950 text-2xl"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>

        <span class="text-xs font-black text-rose-950 uppercase tracking-widest">
          {{ project.category }}
        </span>
        <h2 class="text-3xl font-bold text-gray-200 mt-2 mb-6">
          {{ project.title[currentLocale] }}
        </h2>

        <div class="space-y-6">
          <div>
            <h4 class="text-sm font-bold text-gray-200 uppercase mb-2">
              {{ t('header.about') }}
            </h4>
            <p class="text-gray-400 leading-relaxed">
              {{ project.longDescription[currentLocale] }}
            </p>
          </div>

          <div>
            <h4 class="text-sm font-bold text-gray-200 uppercase mb-3">
              Key Features
            </h4>
            <ul class="grid grid-cols-1 gap-2">
              <li
                v-for="feat in project.features[currentLocale]" :key="feat"
                class="text-sm text-gray-400 flex items-center gap-2"
              >
                <span class="text-rose-950">
                  <i class="fa-solid fa-caret-right"></i>
                </span>
                {{ feat }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-10 pt-6 border-t border-white/10 flex gap-4">
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
  </div>
</Transition>
</template>
