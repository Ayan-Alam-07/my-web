import { motion, AnimatePresence } from "framer-motion";
import { FaLock, FaPlayCircle, FaShieldAlt } from "react-icons/fa";
import styles from "./LockOverlay.module.css";

export default function LockOverlay({ shake, flash, cooldown }) {
  const mm = String(Math.floor(cooldown / 60)).padStart(2, "0");
  const ss = String(cooldown % 60).padStart(2, "0");

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.chains} />
      <AnimatePresence>
        {flash && (
          <motion.div
            className={styles.flash}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 20,
        }}
      >
        <motion.div
          className={styles.lockBox}
          animate={
            shake
              ? {
                  x: [0, -10, 10, -8, 8, -4, 4, 0],
                  rotate: [0, -3, 3, -2, 2, 0],
                }
              : {
                  scale: [1, 1.04, 1],
                  boxShadow: [
                    "0 0 60px rgba(255,60,60,0.4)",
                    "0 0 90px rgba(255,60,60,0.7)",
                    "0 0 60px rgba(255,60,60,0.4)",
                  ],
                }
          }
          transition={
            shake ? { duration: 0.5 } : { duration: 2, repeat: Infinity }
          }
        >
          <FaLock />
        </motion.div>

        <div className={styles.timer}>
          {mm}:{ss}
        </div>

        <div className={styles.tasks}>
          <div className={styles.task}>
            <span className={styles.taskIcon}>
              <FaPlayCircle />
            </span>
            Complete 5 Ads to unlock
          </div>
          <div className={styles.task}>
            <span className={styles.taskIcon}>
              <FaShieldAlt />
            </span>
            Solve 5 Captchas
          </div>
        </div>
      </div>
    </motion.div>
  );
}
