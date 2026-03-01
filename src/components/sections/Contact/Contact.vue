<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { contactData } from '@/data/contact';
import ContactForm from './ContactForm.vue';

const { t } = useI18n();
</script>

<template>
  <div id="contact" class="mx-auto max-w-7xl px-4 py-8">
    <section>
      <h2>
        {{ t('nav.contact') }}
      </h2>
      <div class="mt-2 w-16 border-t-4 border-gray-700"></div>

      <p v-if="contactData.descriptionKey" class="mt-4">
        {{ t(`data.contact.${contactData.descriptionKey}`) }}
      </p>
    </section>

    <div class="mt-8">
      <ContactForm />
    </div>
  </div>
</template>
