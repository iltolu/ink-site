import React from 'react';
import { CircularText } from './CircularText';
import { RotatingTextProps } from '../types';
import { defaultStyles } from '../styles';

export function RotatingText({
  centerText,
  circularText,
  width = 500,
  height = 500,
  radius = 200,
  duration = 20,
  centerTextClassName,
  circularTextClassName,
  backgroundColor = 'black',
}: RotatingTextProps) {
  return (
    <div 
      className={defaultStyles.container}
      style={{ backgroundColor }}
    >
      <div 
        className={defaultStyles.wrapper}
        style={{ width, height }}
      >
        <div className="absolute w-full h-full origin-center animate-spin-reverse">
          <CircularText
            text={circularText}
            radius={radius}
            className={`${defaultStyles.circularText} ${circularTextClassName || ''}`}
          />
        </div>
        <div className={defaultStyles.centerTextWrapper}>
          <h1 className={`${defaultStyles.centerText} ${centerTextClassName || ''}`}>
            {centerText}
          </h1>
        </div>
      </div>
    </div>
  );
}