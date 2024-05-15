"use client";

import random from "random";
import { useCallback, useState } from "react";
import useInterval from "use-interval";
import { ColorData, colors } from "./colorData";

const DEFAULT_INTERVAL = 7;

export default function ColorPage() {
  const [interval, setInterval] = useState(DEFAULT_INTERVAL);
  const [timer, setTimer] = useState(interval);
  const [color, setColor] = useState<ColorData>(
    random.choice(colors) as ColorData
  );

  const updateInterval = useCallback(
    (newInterval: number) => {
      setInterval(newInterval);
      setTimer(newInterval);
    },
    [setInterval, setTimer]
  );

  useInterval(() => {
    if (timer === 0) {
      setTimer(interval);
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
    <div className="grid grid-cols-2 gap-4 m-4 min-h-[25rem]">
      <div className="col-span-2  text-center p-5 text-5xl">{timer}</div>
      <div className="h-full min-h-[40vh]" style={blockStyle} />
      <div
        className="text-center text-7xl flex flex-col"
        style={{ color: color?.color }}
      >
        <div className="flex-1" />
        <div>{color?.hebrewName}</div>
        <div className="flex-1" />
      </div>
      <div className="col-span-2">
        <TimerChooser currentTimer={interval} setTimer={updateInterval} />
      </div>
    </div>
  );
}

interface TimerChooserProps {
  currentTimer: number;
  setTimer: (n: number) => void;
}

function TimerChooser({ currentTimer, setTimer }: TimerChooserProps) {
  return (
    <div className="flex m-10 justify-center">
      <div className=" text-center">
        <button
          onClick={() => setTimer(currentTimer - 1)}
          className="rounded-md text-xl bg-white border text-black p-4"
        >
          -
        </button>
      </div>
      <div className="text-center text-2xl p-4 mx-5">{currentTimer}</div>
      <div className=" text-center">
        <button
          onClick={() => setTimer(currentTimer + 1)}
          className="rounded-md text-xl bg-white border text-black p-4"
        >
          +
        </button>
      </div>
    </div>
  );
}
