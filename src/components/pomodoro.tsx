import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Upload } from "lucide-react";
import { useTimerStore } from "@/hooks/user-timer";

const TOAST_ID = "pomodoro";

export default function Timer() {
  const timeLeft = useTimerStore((s) => s.timeLeft);
  const isPaused = useTimerStore((s) => s.isPaused);
  const togglePaused = useTimerStore((s) => s.togglePaused);

  const handleStartPause = () => {
    togglePaused();
    if (isPaused) {
      toast(formatTime(timeLeft), { id: TOAST_ID, duration: Infinity });
    } else {
    }
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex w-full flex-col mt-10 justify-center p-10 items-center gap-7">
      <div className="w-4/5 flex-none shadow-2xl max-w-lg max-h-[50vh] text-white text-center rounded-2xl bg-slate-700 p-8 flex flex-col items-center gap-6">
        <div className="flex-auto gap-3">
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

        <div className="xl:text-8xl sm:text-5xl md:text-6xl text-4xl font-bold ">
          {formatTime(timeLeft)}
        </div>
        <div>
          <Button
            className="bg-white text-slate-700 font-bold hover:bg-neutral-200"
            onClick={handleStartPause}
          >
            {isPaused ? "START" : "PAUSE"}
          </Button>
        </div>
      </div>
      <div className="flex gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Background Music" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">White Noise</SelectItem>
            <SelectItem value="dark">Brown Noise</SelectItem>
            <SelectItem value="system">Lo Fi</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <Upload />
        </Button>
      </div>
    </div>
  );
}
