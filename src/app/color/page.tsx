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

  const blockStyle = color.bgImagePath
    ? { backgroundImage: `URL('${color.bgImagePath}')` }
    : { backgroundColor: color?.color };

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 m-4 min-h-[25rem]">
      <div className="col-span-2  text-center p-5 text-5xl">{timer}</div>
      <div className="h-full" style={blockStyle} />
      <div
        className="text-center text-7xl flex flex-col"
        style={{ color: color?.color }}
      >
        <div className="flex-1" />
        <div>{color?.hebrewName}</div>
        <div className="flex-1" />
      </div>
    </div>
  );
}
