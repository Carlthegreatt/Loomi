"use client";

import { create } from "zustand";

type TimerState = {
  timeLeft: number;
  isPaused: boolean;
  setTimeLeft: (n: number) => void;
  togglePaused: () => void;
  reset: (n: number) => void;
};

export const useTimerStore = create<TimerState>((set) => ({
  timeLeft: 10,
  isPaused: true,
  setTimeLeft: (n) => set({ timeLeft: n }),
  togglePaused: () => set((s) => ({ isPaused: !s.isPaused })),
  reset: (n) => set({ timeLeft: n, isPaused: true }),
}));
