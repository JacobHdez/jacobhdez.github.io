<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { personalData } from '@/data/personal';
import { socials } from '@/data/socials';
import { navigationItems } from '@/data/navigation';

import ThemeToggle from '../ui/ThemeToggle.vue';
import LanguageToggle from '../ui/LanguageToggle.vue';

const { t } = useI18n();
</script>

<template>
  <header class="relative w-2xs bg-neutral-900 transition-colors duration-1000 dark:bg-neutral-950">
    <div class="absolute inset-0">
      <div class="sticky top-0 bottom-0 left-0 flex h-screen flex-col">
        <div class="grow overflow-y-auto p-4">
          <section class="flex flex-col items-center gap-y-4">
            <div
              class="aspect-square h-32 overflow-hidden rounded-full border-8 border-neutral-700 transition-colors duration-1000 dark:border-neutral-800"
            >
              <img
                :src="personalData.portrait"
                :alt="personalData.name"
                class="h-full w-full object-cover"
              />
            </div>

            <h2 class="text-center text-xl font-bold text-neutral-100">{{ personalData.name }}</h2>

            <div class="flex flex-row gap-1">
              <div
                v-for="(social, index) in socials"
                :key="index"
                class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition-colors duration-300 hover:bg-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              >
                <a :href="social.url" target="_blank" class="text-neutral-100">
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
          </section>

          <nav class="mt-16">
            <ul class="space-y-4 text-neutral-400">
              <li
                v-for="(item, index) in navigationItems"
                :key="index"
                class="group relative flex flex-row items-center gap-2 px-2 py-1"
              >
                <component
                  :is="item.icon"
                  class="h-5 w-5 transition-colors duration-300 group-hover:text-neutral-100"
                />
                <a
                  :href="`#${item.section}`"
                  class="transition-colors duration-300 group-hover:text-neutral-100"
                >
                  {{ t(`nav.${item.section}`) }}
                  <span class="absolute inset-0"></span>
                </a>
              </li>
            </ul>
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
