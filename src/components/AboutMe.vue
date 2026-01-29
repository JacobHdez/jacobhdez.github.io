<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
<section id="about" class="py-24 bg-gray-900/30">
  <div class="max-w-4xl mx-auto px-4">
    <div class="flex flex-col md:flex-row gap-12 items-center">
      <div class="flex-1">
        <h2 class="text-3xl font-black uppercase tracking-tighter italic mb-6">
          {{ t('about.title') }}
        </h2>

        <div class="space-y-4 text-gray-400 leading-relaxed text-lg">
          <p>{{ t('about.p1') }}</p>
          <p>{{ t('about.p2') }}</p>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-8">
          <div class="p-4 bg-gray-950 rounded-xl border border-white/10">
            <span class="block text-gray-200 font-bold text-xl">UE5</span>
            <span class="text-xs uppercase tracking-widest opacity-50">Game Dev</span>
          </div>

          <div class="p-4 bg-gray-950 rounded-xl border border-white/10">
            <span class="block text-gray-200 font-bold text-xl">Data</span>
            <span class="text-xs uppercase tracking-widest opacity-50">Engineering</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
