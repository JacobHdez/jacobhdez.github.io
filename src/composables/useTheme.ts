import { ref, onMounted, watch } from 'vue';

export function useTheme() {
  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('color-scheme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      isDark.value = true;
    }
  });

  watch(isDark, (newVal) => {
    const htmlEl = document.documentElement;

    if (newVal) {
      htmlEl.classList.add('dark');
      localStorage.setItem('color-scheme', 'dark');
    } else {
      htmlEl.classList.remove('dark');
      localStorage.setItem('color-scheme', 'light');
    }
  });

  return { isDark, toggleTheme };
}
