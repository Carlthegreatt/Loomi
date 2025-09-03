// src/components/timer-engine.tsx
"use client";

import { useEffect } from "react";
import { useTimerStore } from "@/features/pomodoro/hooks/use-user-timer";
import { toast } from "sonner";

const TOAST_ID = "pomodoro";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function TimerEngine() {
  useEffect(() => {
    const id = setInterval(() => {
      const { timeLeft, isPaused, setTimeLeft, reset } =
        useTimerStore.getState();

      if (isPaused) {
        toast.dismiss(TOAST_ID);
        return;
      }

      if (timeLeft > 0) {
        const next = timeLeft - 1;
        setTimeLeft(next);
        toast(`Pomodoro — ${formatTime(next)}`, {
          id: TOAST_ID,
          duration: Infinity,
        });
        if (next === 0) {
          toast.success("Time is up!!", { id: TOAST_ID });
          toast.dismiss(TOAST_ID);
          reset(10);
        }
      }
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return null;
}
