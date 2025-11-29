'use client';

import { useEffect, useState } from 'react';

export function useCountAnimation(
  end: number,
  duration: number = 2000,
  trigger: boolean | number = true
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Don't animate if trigger is explicitly false
    if (trigger === false) return;

    setCount(0);
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, trigger]);

  return count;
}
