import { useState, useEffect } from "react";

export default function Timer() {
  const [timeLeft, setTimeleft] = useState(60);

  useEffect(() => {
    if (timeLeft <= 0)
  });

  return (
    <div className="flex justify-center h-screen p-10">
      <div className="w-4/5 max-w-lg max-h-[50vh] text-center rounded-2xl bg-slate-700"></div>
    </div>
  );
}
