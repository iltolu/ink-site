import React from 'react';

interface CircularTextProps {
  text: string;
  radius: number;
  className?: string;
}

export function CircularText({ text, radius, className = '' }: CircularTextProps) {
  const characters = text.split('');
  const angleStep = 360 / characters.length;

  return (
    <div 
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`} 
      style={{ width: radius * 2, height: radius * 2 }}
    >
      {characters.map((char, i) => {
        const angle = i * angleStep;
        const radians = (angle - 90) * (Math.PI / 180);
        const x = radius + radius * Math.cos(radians);
        const y = radius + radius * Math.sin(radians);

        return (
          <span
            key={i}
            className="absolute origin-center tracking-widest"
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              letterSpacing: char === '✶' ? '0.75em' : '0.35em',
              marginLeft: char === '✶' ? '0.5em' : '0',
              marginRight: char === '✶' ? '0.5em' : '0',
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
}