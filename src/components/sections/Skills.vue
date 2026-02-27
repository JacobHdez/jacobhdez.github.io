<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { skillsData } from '@/data/skills';

const { t } = useI18n();

const getYears = (dateString: string) => {
  const years =
    (new Date().getTime() - new Date(dateString).getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years);
};

const preSkills = computed(() => {
  return skillsData.skills.map((skill) => ({
    ...skill,
    years: getYears(skill.datetime)
  }));
});
</script>

<template>
  <div id="skills" class="bg-neutral-200 transition-colors duration-1000 dark:bg-neutral-800">
    <section class="mx-auto max-w-7xl px-4 py-8">
      <h2>
        {{ t('nav.skills') }}
      </h2>
      <div class="mt-2 w-16 border-t-4 border-gray-700"></div>

      <p v-if="skillsData.description" class="mt-4">
        {{ t(`data.skills.${skillsData.description}`) }}
      </p>

      <div class="mt-8 grid grid-cols-1 gap-x-16 gap-y-1 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="(skill, index) in preSkills" :key="index" class="group py-2">
          <div class="flex flex-row justify-between text-sm">
            <span>{{ skill.name }}</span>
            <span class="font-light">{{ t('skills.year', { count: skill.years }) }}</span>
          </div>

          <div class="relative mt-1 w-full">
            <div
              class="h-2 w-full border border-neutral-900/30 transition-colors duration-1000 dark:border-neutral-100/30"
            >
              <div class="h-full bg-gray-700" :style="{ width: skill.level }"></div>
            </div>

            <div
              class="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-0 transition-all duration-300 group-hover:-top-6 group-hover:opacity-100"
            >
              {{ skill.level }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
