import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../pages/TapEarn.module.css";

const LABELS = ["VES", "TOKEN", "GEMS", "SPIN"];

export default function TapCoin({ onTap, locked, children }) {
  const [labelIdx, setLabelIdx] = useState(0);
  const [ripples, setRipples] = useState([]);
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const t = setInterval(
      () => setLabelIdx((i) => (i + 1) % LABELS.length),
      1800,
    );
    return () => clearInterval(t);
  }, []);

  const handleTap = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    onTap?.({ x, y, label: LABELS[labelIdx] });

    if (locked) return;

    const rid = Date.now() + Math.random();
    setRipples((r) => [...r, { id: rid, x, y }]);
    setTimeout(() => setRipples((r) => r.filter((it) => it.id !== rid)), 800);

    const burst = Array.from({ length: 12 }).map((_, i) => ({
      id: rid + "-" + i,
      angle: (i / 12) * Math.PI * 2 + Math.random() * 0.4,
      dist: 80 + Math.random() * 80,
      x,
      y,
    }));
    setSparks((s) => [...s, ...burst]);
    setTimeout(
      () =>
        setSparks((s) => s.filter((sp) => !burst.find((b) => b.id === sp.id))),
      900,
    );
  };

  return (
    <div className={styles.coinShellWrap}>
      <motion.div
        className={styles.ring}
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={styles.ring2}
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className={styles.coin}
        onPointerDown={handleTap}
        whileTap={{ scale: 0.92 }}
        animate={{
          y: [0, -6, 0],
          boxShadow: [
            "0 30px 80px rgba(255,150,30,0.45), 0 0 0 6px rgba(255,200,87,0.18), 0 0 60px rgba(255,180,60,0.55), inset 0 -18px 40px rgba(120,60,0,0.55), inset 0 18px 40px rgba(255,255,200,0.45)",
            "0 40px 100px rgba(255,150,30,0.6), 0 0 0 6px rgba(255,200,87,0.22), 0 0 90px rgba(255,180,60,0.75), inset 0 -18px 40px rgba(120,60,0,0.55), inset 0 18px 40px rgba(255,255,200,0.5)",
            "0 30px 80px rgba(255,150,30,0.45), 0 0 0 6px rgba(255,200,87,0.18), 0 0 60px rgba(255,180,60,0.55), inset 0 -18px 40px rgba(120,60,0,0.55), inset 0 18px 40px rgba(255,255,200,0.45)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{ pointerEvents: "auto" }}
      >
        <div className={styles.coinShine} />
        <div className={styles.coinInner}>
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={LABELS[labelIdx]}
                className={styles.coinText}
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.9 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                {LABELS[labelIdx]}
              </motion.div>
            </AnimatePresence>
            <div className={styles.coinTextSub}>TAP TO EARN</div>
          </div>
        </div>

        {ripples.map((r) => (
          <motion.span
            key={r.id}
            className={styles.ripple}
            initial={{ width: 0, height: 0, opacity: 0.8, x: r.x, y: r.y }}
            animate={{
              width: 380,
              height: 380,
              opacity: 0,
              x: r.x - 190,
              y: r.y - 190,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: "absolute", left: 0, top: 0 }}
          />
        ))}

        {sparks.map((s) => (
          <motion.span
            key={s.id}
            className={styles.spark}
            initial={{ x: s.x, y: s.y, opacity: 1, scale: 1 }}
            animate={{
              x: s.x + Math.cos(s.angle) * s.dist,
              y: s.y + Math.sin(s.angle) * s.dist,
              opacity: 0,
              scale: 0.2,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: "absolute", left: 0, top: 0 }}
          />
        ))}
      </motion.div>

      {children}
    </div>
  );
}
