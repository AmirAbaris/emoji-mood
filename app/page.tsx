"use client";

import { useState } from "react";

export default function Home() {
  const [mood, setMood] = useState<string>("");

  const emojies = ["😄", "😐", "😢", "😴", "😠", "🤩", "😰"];

  const handleSelect = (emoji: string) => {
    setMood(emoji);
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-dvh p-8">
      <h1 className="text-3xl font-bold text-primary">Select Your mood</h1>
      <div className="bg-muted rounded-2xl w-full max-w-lg min-h-20 flex items-center justify-center gap-6">
        {emojies.map((emoji, idx) => (
          <button
            className="hover:cursor-pointer hover:scale-120 transition-transform duration-300"
            key={idx}
            onClick={() => handleSelect(emoji)}
          >
            <span className="text-3xl">{emoji}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <h2>your Mood</h2>
        <span className="text-3xl">{mood}</span>
      </div>

      <span className="mt-auto">
        this project is a fun reconeection with react and frontend after a long
        burnout
      </span>
    </div>
  );
}
