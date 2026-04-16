import { create } from 'zustand';

export const useUIStore = create((set, get) => ({
  isLoading: false,
  minDuration: 500,
  startTime: null,

  startLoading: () => {
    set({
      isLoading: true,
      startTime: Date.now(),
    });
  },

  stopLoading: () => {
    const { startTime, minDuration } = get();

    if (!startTime) {
      set({ isLoading: false });
      return;
    }

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(minDuration - elapsed, 0);

    setTimeout(() => {
      set({ isLoading: false });
    }, remaining);
  },
}));
