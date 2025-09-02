import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeleft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerID = setInterval(() => {
      setTimeleft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerID);
  }, [timeLeft]);

  return (
    <div className="flex justify-center h-screen p-10">
      <div className="w-4/5 max-w-lg max-h-[50vh] text-white text-5xl font-semibold text-center rounded-2xl bg-slate-700">
        {timeLeft}
      </div>
    </div>
  );
}
