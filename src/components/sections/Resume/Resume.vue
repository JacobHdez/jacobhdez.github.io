<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { resumeData } from '@/data/resume';

import ResumeSection from './ResumeSection.vue';

const { t } = useI18n();
</script>

<template>
  <div id="resume" class="mx-auto max-w-7xl px-4 py-8">
    <section>
      <h2>
        {{ t('nav.resume') }}
      </h2>
      <div class="mt-2 w-16 border-t-4 border-gray-700"></div>

      <p v-if="resumeData.descriptionKey" class="mt-4">
        {{ t(`data.resume.${resumeData.descriptionKey}`) }}
      </p>
    </section>

    <div class="mt-8 grid grid-cols-1 items-start gap-8 xl:grid-cols-2">
      <ResumeSection
        v-if="resumeData.sections[0]"
        :section="resumeData.sections[0]"
        :section_type="resumeData.sections[0].titleKey"
        class="xl:col-start-1 xl:row-start-1"
      />
      <ResumeSection
        v-if="resumeData.sections[1]"
        :section="resumeData.sections[1]"
        :section_type="resumeData.sections[1].titleKey"
        class="xl:col-start-2 xl:row-span-2 xl:row-start-1"
      />
      <ResumeSection
        v-if="resumeData.sections[2]"
        :section="resumeData.sections[2]"
        :section_type="resumeData.sections[2].titleKey"
        class="xl:col-start-1 xl:row-start-2"
      />
    </div>
  </div>
</template>
