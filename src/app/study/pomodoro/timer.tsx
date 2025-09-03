import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function Timer() {
  const [timeLeft, setTimeleft] = useState(1500);

  const [isPaused, setIsPaused] = useState(true);

  const togglePause = () => setIsPaused((prev) => !prev);

  useEffect(() => {
    if (timeLeft <= 0 || isPaused) return;

    const timerID = setInterval(() => {
      setTimeleft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerID);
  }, [timeLeft, isPaused]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col justify-center h-screen p-10 items-center gap-7">
      <div className="w-4/5 shadow-2xl max-w-lg max-h-[50vh] text-white text-center rounded-2xl bg-slate-700 p-8 flex flex-col items-center gap-6">
        <div className="flex gap-3">
          <Button className="bg-transparent text-white shadow-none hover:bg-slate-800">
            Pomodoro
          </Button>
          <Button className="bg-transparent text-white shadow-none hover:bg-slate-800">
            Short Break
          </Button>
          <Button className="bg-transparent text-white shadow-none hover:bg-slate-800">
            Long Break
          </Button>
        </div>

        <div className="text-8xl font-semibold">{formatTime(timeLeft)}</div>
        <div>
          <Button
            className="bg-white text-slate-700 font-bold hover:bg-neutral-200"
            onClick={() => {
              togglePause();
              toast("Time to focus");
            }}
          >
            {isPaused ? "START" : "PAUSE"}
          </Button>
        </div>
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Background Music" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">White Noise</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
