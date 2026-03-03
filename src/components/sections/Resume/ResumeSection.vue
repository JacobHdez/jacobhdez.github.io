<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { Section, SectionType, Entry } from '@/data/types/ResumeData';

const props = defineProps<{
  section: Section;
  section_type: SectionType;
}>();

const { t, d } = useI18n();

const formatEndDate = (entry: Entry) => {
  const { end, endStatus } = entry.dates;

  switch (endStatus) {
    case 'date':
      return end ? d(new Date(end), 'small') : '';

    case 'present':
      return t('resume.present');

    default:
      return '';
  }
};
</script>

<template>
  <section>
    <h3>{{ t(`resume.${props.section.titleKey}`) }}</h3>

    <div class="mt-2 space-y-8 border-l-2 border-gray-700 pl-4">
      <div v-for="(entry, index) in props.section.entries" :key="index" class="relative">
        <span
          class="absolute top-0 -left-6.25 h-4 w-4 rounded-full border-2 border-gray-700 bg-neutral-100 transition-colors duration-1000 dark:bg-neutral-900"
        ></span>

        <div class="space-y-2">
          <div class="flex flex-col justify-between gap-1 lg:flex-row">
            <h4 class="text-base leading-none font-bold">
              {{ t(`data.resume.${props.section_type}.${entry.i18n_route}.${entry.titleKey}`) }}
            </h4>
            <span
              class="font-mono text-xs font-light text-neutral-600 capitalize italic transition-colors duration-1000 lg:text-right dark:text-neutral-400"
            >
              {{ d(new Date(entry.dates.start), 'small') }}
              <span v-if="entry.dates.end || entry.dates.endStatus" class="px-0.5">-</span>
              {{ formatEndDate(entry) }}
            </span>
          </div>

          <div class="flex flex-col justify-between gap-1 lg:flex-row">
            <h5 class="text-sm font-medium">
              {{ entry.organization }}
            </h5>
            <span
              class="font-mono text-xs font-light text-neutral-600 italic transition-colors duration-1000 lg:text-right dark:text-neutral-400"
            >
              {{ entry.location }}
            </span>
          </div>

          <ul
            v-if="entry.descriptionKeys && entry.descriptionKeys.length > 0"
            class="list-inside list-disc pt-2"
          >
            <li
              v-for="(desc, idx) in entry.descriptionKeys"
              :key="idx"
              class="text-justify text-sm leading-relaxed font-light text-pretty transition-all duration-1000 dark:font-extralight"
            >
              {{ t(`data.resume.${props.section_type}.${entry.i18n_route}.${desc}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
