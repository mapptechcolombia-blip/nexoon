import { useSyncExternalStore } from 'react';

export function useScroll(threshold: number = 10) {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener('scroll', onStoreChange, { passive: true });
      return () => window.removeEventListener('scroll', onStoreChange);
    },
    () => window.scrollY > threshold,
    () => false,
  );
}
