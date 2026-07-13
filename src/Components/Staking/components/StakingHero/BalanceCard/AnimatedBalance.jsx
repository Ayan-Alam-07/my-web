import { useEffect, useState } from "react";

import styles from "./AnimatedBalance.module.css";

export default function AnimatedBalance({
  balance,

  secondRate,
}) {
  const [current, setCurrent] = useState(balance);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + secondRate);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondRate]);

  return (
    <h2 className={styles.balance}>
      {current.toLocaleString(undefined, {
        minimumFractionDigits: 4,

        maximumFractionDigits: 4,
      })}

      <small> VEs</small>
    </h2>
  );
}
