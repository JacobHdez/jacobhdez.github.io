<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useIntersection } from '../composables/useIntersection';

const { t } = useI18n();
const { target, isVisible } = useIntersection(0.2, true);

const skillGroups = [
    {
        title: 'Games',
        skills: [
            { name: 'Unreal Engine 5', level: '40%', icon: '' },
            { name: 'C++', level: '90%', icon: '' }
        ]
    },
    {
        title: 'Programming',
        skills: [
            { name: 'Python', level: '85%', icon: '' },
            { name: 'NodeJS', level: '70%', icon: '' },
            { name: 'TypeScript', level: '70%', icon: '' },
            { name: 'LaTeX', level: '90%', icon: '' }
        ]
    }
];
</script>

<template>
<section id="skills" class="py-24 bg-gray-950">
  <div class="max-w-6xl mx-auto px-4">
    <header class="mb-16 text-center">
      <h2 class="text-4xl font-black uppercase tracking-tighter italic mb-4">
        Tech <span class="text-rose-950">Stack</span>
      </h2>
      <p class="text-gray-400 max-w-xl mx-auto italic">
        {{ t('hero.subtitle').split('.')[0] }}.
      </p>
    </header>

    <div ref="target" class="grid md:grid-cols-2 gap-12">
      <div
        v-for="group in skillGroups"
        :key="group.title"
      >
        <h3 class="text-xl font-bold mb-8 flex items-center gap-3 text-gray-200">
          <span class="w-8 h-0.5 bg-rose-950"></span>
          {{ group.title === 'Games' ? t('header.games') : t('header.prog') }}
        </h3>

        <div class="space-y-6">
          <div
            v-for="(skill, index) in group.skills"
            :key="skill.name"
          >
            <div class="flex justify-between mb-2">
              <span class="text-sm font-bold text-gray-400">
                {{ skill.icon }} {{ skill.name }}
              </span>
              <span class="text-xs font-mono text-rose-950">
                {{ skill.level }}
              </span>
            </div>

            <div class="h-2 w-full bg-gray-900 rounded-full overflow-hidden border border-white/10">
              <div
                class="h-full bg-rose-950 transition-all duration-2500 ease-out relative"
                :style="{
                  width: isVisible ? skill.level : '0%',
                  transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                }"
              >
                <div class="absolute inset-0 shadow-[0_0_15px_4px_rgba(76,5,25,0.8)]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
