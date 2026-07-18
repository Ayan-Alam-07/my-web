import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({
  value = 0,
  duration = 1000,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = true,
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const frameRef = useRef();

  useEffect(() => {
    const startValue = displayValue;
    const endValue = Number(value);
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // Ease Out Cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const currentValue = startValue + (endValue - startValue) * eased;

      setDisplayValue(currentValue);

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [value]);

  const formatted = separator
    ? displayValue.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : displayValue.toFixed(decimals);

  return (
    <>
      {prefix}
      {formatted}
      {suffix}
    </>
  );
};

export default AnimatedNumber;
