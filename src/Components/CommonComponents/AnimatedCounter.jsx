import { useEffect, useState } from "react";

export default function AnimatedCounter({
  value = 0,
  duration = 1200,
  formatter = (v) => Math.round(v).toLocaleString("en-IN"),
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const end = Number(value);

    const incrementTime = 45;

    const steps = duration / incrementTime;

    const stepValue = end / steps;

    const timer = setInterval(() => {
      start += stepValue;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return formatter(count);
}
