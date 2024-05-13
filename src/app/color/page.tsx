"use client";

import random from "random";
import { useState } from "react";
import useInterval from "use-interval";
import { ColorData, colors } from "./colorData";

export default function ColorPage() {
  const [timer, setTimer] = useState(10);
  const [color, setColor] = useState<ColorData>(
    random.choice(colors) as ColorData
  );
  useInterval(() => {
    if (timer === 0) {
      setTimer(10);
      let newColor = color;
      while (newColor === color) {
        newColor = random.choice(colors) as ColorData;
      }
      setColor(newColor);
    } else {
      setTimer((prev) => prev - 1);
    }
  }, 1000);

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 m-4">
      <div className="col-span-2  text-center p-5 text-5xl">{timer}</div>
      <div style={{ backgroundColor: color?.color }} />
      <div className="text-center text-7xl" style={{ color: color?.color }}>
        {color?.hebrewName}
      </div>
    </div>
  );
}
