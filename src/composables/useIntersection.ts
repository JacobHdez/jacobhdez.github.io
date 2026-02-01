import { ref, onMounted, onUnmounted, type Ref } from 'vue';

export function useIntersection(
  threshold = 0.2,
  once = true
): {
  target: Ref<HTMLElement | null>;
  isVisible: Ref<boolean>;
} {
  const target = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  let observer: IntersectionObserver | null = null;

  onMounted( () => {
    if ( !target.value ) return;

    observer = new IntersectionObserver(
      ([entry]) => {
        if ( entry?.isIntersecting ) {
          isVisible.value = true;
          if ( once ) observer?.unobserve(entry.target);
        }
        else if ( !once ) {
          isVisible.value = false;
        }
      },
      { threshold }
    );

    observer.observe(target.value);
  } );

  onUnmounted( () => {
    observer?.disconnect();
  } );

  return { target, isVisible };
}
