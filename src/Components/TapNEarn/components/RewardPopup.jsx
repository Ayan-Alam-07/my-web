import { motion } from "framer-motion";
import styles from "./RewardPopup.module.css";

export default function RewardPopup({ id, x, y, label }) {
  const drift = (Math.random() - 0.5) * 60;
  const rot = (Math.random() - 0.5) * 18;

  return (
    <motion.div
      key={id}
      className={styles.popup}
      initial={{ x, y, opacity: 0, scale: 0.6, rotate: 0 }}
      animate={{
        x: x + drift,
        y: y - 140,
        opacity: [0, 1, 1, 0],
        scale: [0.6, 1.15, 1, 0.9],
        rotate: rot,
      }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      style={{ left: 0, top: 0 }}
    >
      {label}
    </motion.div>
  );
}
