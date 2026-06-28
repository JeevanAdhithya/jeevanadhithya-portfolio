import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export const AnimatedCounter = ({ value, duration = 1.2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Extract numerical digits from the value string (e.g., "1,500+" -> 1500, "20+" -> 20)
    const numericPart = value.replace(/,/g, '').match(/\d+/);
    if (!numericPart) {
      setCount(0);
      return;
    }

    const end = parseInt(numericPart[0], 10);
    const startTimestamp = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Quadratic ease out
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * end);
      
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  // Format with commas and append suffix (+ or similar)
  const suffix = value.includes('+') ? '+' : '';
  const prefix = value.startsWith('$') ? '$' : '';
  const cleanValue = value.replace(/[0-9,+$]+/g, ''); // retain other text/symbols if any
  
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
      {cleanValue}
    </span>
  );
};
