import React from 'react';
import { CircularText } from './CircularText';

export function RotatingText() {
  return (
    <div className="relative w-[500px] h-[500px] flex items-center justify-center">
      <div className="absolute w-full h-full origin-center animate-spin-reverse">
        <CircularText
          text="TATTOO ART ✶ DESIGN BY HEART"
          radius={200}
          className="text-white text-xl font-medium tracking-wider"
        />
      </div>
      <div className="absolute z-10">
        <h1 className="text-white text-4xl font-bold tracking-wider">TRACED INK</h1>
      </div>
    </div>
  );
}