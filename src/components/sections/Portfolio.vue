<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { portfolioData } from '@/data/portfolio';
import ProjectCard from '../Portfolio/ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <div id="portfolio" class="bg-neutral-200 transition-colors duration-1000 dark:bg-neutral-800">
    <section class="mx-auto max-w-7xl px-4 py-8">
      <h2>
        {{ t('nav.portfolio') }}
      </h2>
      <div class="mt-2 w-16 border-t-4 border-gray-700"></div>

      <p v-if="portfolioData.descriptionKey" class="mt-4 text-lg">
        {{ t(`data.portfolio.${portfolioData.descriptionKey}`) }}
      </p>

      <div
        v-if="portfolioData.projects.length > 0"
        class="mt-8 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] justify-items-center gap-4"
      >
        <ProjectCard
          v-for="(project, index) in portfolioData.projects"
          :key="index"
          :project="project"
          :category="project.category"
        />
      </div>
      <div v-else class="mt-8 text-lg">
        <p>{{ t('portfolio.empty') }}</p>
      </div>
    </section>
  </div>
</template>
