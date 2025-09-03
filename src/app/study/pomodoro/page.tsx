"use client";

import Timer from "./timer";
import { Toaster } from "@/components/ui/sonner";

export default function Pomodoro() {
  return (
    <div className="mt-2">
      <Timer></Timer>
      <>Toaster </>
    </div>
  );
}
