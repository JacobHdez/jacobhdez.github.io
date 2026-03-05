<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { GlobeAltIcon, CodeBracketIcon } from '@heroicons/vue/24/solid';
import type { Project, ProjectCategory } from '@/data/types/PortfolioData';

const props = defineProps<{
  project: Project;
  category: ProjectCategory;
}>();
const { t } = useI18n();

const projectTitle = t(`data.portfolio.projects.${props.category}.${props.project.i18n_route}.${props.project.titleKey}`);
</script>

<template>
  <section
    class="group flex max-w-sm flex-col overflow-hidden rounded-lg border border-neutral-900/30 bg-neutral-100 dark:border-neutral-100/30 dark:bg-neutral-900"
  >
    <div class="aspect-video w-full overflow-hidden">
      <img
        :src="project.image"
        :alt="projectTitle"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <div class="flex grow flex-col space-y-4 border-t border-neutral-900/30 p-4 dark:border-neutral-100/30">
      <h4 class="text-xl font-bold">
        {{ projectTitle }}
      </h4>

      <p class="grow text-sm">
        {{ t(`data.portfolio.projects.${props.category}.${props.project.i18n_route}.${props.project.descriptionKey}`) }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in props.project.tech"
          :key="tech"
          class="rounded-md border border-neutral-900/30 bg-gray-700 px-2 py-1 font-mono text-xs text-neutral-100 dark:border-neutral-100/30"
        >
          {{ tech }}
        </span>
      </div>

      <div class="flex flex-row gap-4 border-t border-neutral-900/30 pt-4 text-xs dark:border-neutral-100/30">
        <a
          v-if="project.links?.web"
          :href="project.links.web"
          target="_blank"
          class="flex flex-1 items-center justify-center gap-2 rounded-md border border-neutral-900/30 bg-neutral-200 py-1 transition-colors duration-300 hover:bg-neutral-800 hover:text-neutral-100 dark:border-neutral-100/30 dark:bg-neutral-800 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
        >
          <GlobeAltIcon class="size-4" />
          <span>
            {{ t('portfolio.web') }}
          </span>
        </a>
        <a
          v-if="project.links?.code"
          :href="project.links.code"
          target="_blank"
          class="flex flex-1 items-center justify-center gap-2 rounded-md border border-neutral-900/30 bg-neutral-200 py-1 transition-colors duration-300 hover:bg-neutral-800 hover:text-neutral-100 dark:border-neutral-100/30 dark:bg-neutral-800 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
        >
          <CodeBracketIcon class="size-4" />
          <span>
            {{ t('portfolio.code') }}
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
