export function createRotationAnimation(duration: number) {
  return {
    [`@keyframes spinReverse${duration}`]: {
      from: {
        transform: 'rotate(360deg)',
      },
      to: {
        transform: 'rotate(0deg)',
      },
    },
    animation: `spinReverse${duration} ${duration}s linear infinite`,
  };
}