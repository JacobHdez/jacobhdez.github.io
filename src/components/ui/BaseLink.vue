<script setup lang="ts">
import { computed } from 'vue';

type Variant = 'primary' | 'secondary' | 'link';

interface Props {
  href: string
  variant?: Variant
  external?: boolean
}

const props = withDefaults( defineProps<Props>(), {
  variant: 'primary',
  external: false
} );

const size = 'px-8 py-4 text-gray-200 font-bold';

const variantClasses: Record<Variant, string> = {
  primary: 'bg-rose-950 hover:scale-105 transition-transform shadow-lg shadow-rose-950/20',
  secondary: 'bg-transparent border border-white/10 hover:bg-white/10 transition-colors',
  link: 'text-gray-400 hover:text-rose-950 transition-colors'
}

const linkClasses = computed( () => [
  variantClasses[props.variant],
  props.variant !== 'link' && size
] );
</script>

<template>
<a
  :href="href"
  :target="external ? '_blank' : undefined"
  :rel="external ? 'noopener noreferrer' : undefined"
  :class="linkClasses"
  class="inline-flex items-center justify-center gap-1 rounded-xl"
>
  <slot />
</a>
</template>
