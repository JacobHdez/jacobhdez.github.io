import { ref, watch, onUnmounted, type Ref } from 'vue';

type State = 'typing' | 'waiting' | 'deleting';

export function useTypewriterLoop(
  texts: Ref<string[]>,
  typingSpeed = 60,
  deletingSpeed = 35,
  waitAfterTyping = 2000
) {
  const output = ref('');
  const state = ref<State>('typing');
  const isRunning = ref(false);

  let textIndex = 0;
  let charIndex = 0;
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const clear = () => {
    if (timeout) clearTimeout(timeout);
  };

  const step = () => {
    const currentText = texts.value[textIndex];
    if (!currentText) return;

    if (state.value === 'typing') {
      if (charIndex < currentText.length) {
        output.value += currentText[charIndex++];
        timeout = setTimeout(step, typingSpeed);
      } else {
        state.value = 'waiting';
        timeout = setTimeout(() => {
          state.value = 'deleting';
          step();
        }, waitAfterTyping);
      }
    } else if (state.value === 'deleting') {
      if (charIndex > 0) {
        output.value = currentText.slice(0, --charIndex);
        timeout = setTimeout(step, deletingSpeed);
      } else {
        textIndex = (textIndex + 1) % texts.value.length;
        state.value = 'typing';
        timeout = setTimeout(step, typingSpeed);
      }
    }
  };

  const start = () => {
    if (isRunning.value) return;
    isRunning.value = true;
    step();
  };

  const stop = () => {
    clear();
    isRunning.value = false;
  };

  watch(texts, () => {
    stop();
    output.value = '';
    textIndex = 0;
    charIndex = 0;
    state.value = 'typing';
    start();
  });

  onUnmounted(stop);

  return { output, state, start, stop };
}
