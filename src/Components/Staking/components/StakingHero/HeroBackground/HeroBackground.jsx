import styles from "./HeroBackground.module.css";

export default function HeroBackground() {
  return (
    <div className={styles.background}>
      <div className={styles.glowOne}></div>

      <div className={styles.glowTwo}></div>

      <div className={styles.glowThree}></div>

      <div className={styles.grid}></div>
    </div>
  );
}
