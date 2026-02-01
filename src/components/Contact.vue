<script setup lang="ts">
import BaseLink from './ui/BaseLink.vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const email = 'jacobo.hdezv@gmail.com';
const copyEmail = () => {
  navigator.clipboard.writeText(email);
  alert('Email copied to clipboard!');
}
</script>

<template>
<section id="contact" class="py-24 bg-gray-950 border-t border-white/10">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-4xl font-black uppercase tracking-tighter italic mb-6">
      {{ t('contact.title') }}
    </h2>
    <p class="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
      {{ t('contact.subtitle') }}
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <BaseLink :href="`mailto:${email}`" variant="primary" external>
          <span class="text-xl"><i class="fa-solid fa-envelope"></i></span>
          {{ t('contact.send_email') }}
      </BaseLink>

      <button
        @click="copyEmail"
        class="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-gray-400 font-bold bg-transparent border border-white/10 hover:bg-white/10 transition-colors"
      >
        <span class="text-xl"><i class="fa-solid fa-clipboard"></i></span>
        {{ email }}
      </button>
    </div>

    <div class="mt-16 flex justify-center gap-8 text-gray-400">
      <BaseLink href="https://github.com/JacobHdez" variant="link" external>
        <span><i class="fa-brands fa-github"></i></span>GitHub
      </BaseLink>
      <BaseLink href="https://www.linkedin.com/in/jacobohdezv/" variant="link" external>
        <span><i class="fa-brands fa-square-linkedin"></i></span>LinkedIn
      </BaseLink>
    </div>
  </div>
</section>
</template>
