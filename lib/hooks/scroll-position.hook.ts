import { useSyncExternalStore } from 'react';

// 1. Subscribe to scroll events
function subscribe(callback: () => void) {
  window.addEventListener('scroll', callback, { passive: true });
  return () => window.removeEventListener('scroll', callback);
}

// 2. Snapshot of client state
function getSnapshot() {
  return window.scrollY;
}

// 3. SSR Snapshot (must return a static value to prevent hydration errors)
function getServerSnapshot() {
  return 0;
}

export function useScrollPosition() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
