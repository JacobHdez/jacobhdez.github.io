<script setup lang="ts">
import BaseLink from './ui/BaseLink.vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const currentYear = new Date().getFullYear()
</script>

<template>
<footer class="bg-gray-950 border-t border-white/10 pt-16 pb-8">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
      <div class="max-w-xs">
        <div class="text-2xl font-black text-gray-200 mb-4">
          {{ t('title') }}
        </div>
        <p class="text-gray-400 text-sm leading-relaxed">
          {{ t('hero.subtitle') }}
        </p>
      </div>

      <div class="grid grid-cols-2 gap-12">
        <div>
          <h4 class="text-gray-200 font-bold mb-4 text-sm uppercase tracking-widest">
            {{ t('header.prog') }}
          </h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li class="hover:text-rose-950 transition-colors cursor-pointer">
              C++ / Unreal Engine 5
            </li>
            <li class="hover:text-rose-950 transition-colors cursor-pointer">
              Python / NodeJS
            </li>
            <li class="hover:text-rose-950 transition-colors cursor-pointer">
              TypeScript
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-gray-200 font-bold mb-4 text-sm uppercase tracking-widest">
            Social
          </h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>
              <BaseLink href="https://github.com/JacobHdez" variant="link" external>
                <span><i class="fa-brands fa-github"></i></span>
                GitHub
              </BaseLink>
            </li>
            <li>
              <BaseLink href="https://www.linkedin.com/in/jacobohdezv/" variant="link" external>
                <span><i class="fa-brands fa-square-linkedin"></i></span>
                LinkedIn
              </BaseLink>
            </li>
            <li>
              <BaseLink href="https://discord.com/users/587370244855693343" variant="link" external>
                <span><i class="fa-brands fa-discord"></i></span>
                Discord
              </BaseLink>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 uppercase tracking-widest">
      <p>
        &copy; {{ currentYear }} - Made with Vite + Vue 3 + TailwindCSS
      </p>
      <div class="flex items-center gap-4">
        <span>
          {{ t('header.contact') }}: user@example.com
        </span>
        <span class="text-rose-950 font-bold">
          //Dev.Mode
        </span>
      </div>
    </div>
  </div>
</footer>
</template>
