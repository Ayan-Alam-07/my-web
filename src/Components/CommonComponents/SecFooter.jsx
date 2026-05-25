import styles from "./SecFooter.module.css";

const SecFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerDivider} />
      <p className={styles.footerText}>© 2025 GemVault · All rights reserved</p>
      <div className={styles.footerLinks}>
        <span className={styles.footerLink}>Terms</span>
        <span className={styles.footerDot}>·</span>
        <span className={styles.footerLink}>Privacy</span>
        <span className={styles.footerDot}>·</span>
        <span className={styles.footerLink}>Support</span>
      </div>
    </footer>
  );
};
export default SecFooter;
