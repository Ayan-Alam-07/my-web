import styles from "./ContributionGuide.module.css";

export default function ContributionGuide({ display }) {
  const steps = [
    "Sync once every day to progress",
    "Maintain your streak without missing days",
    "Unlock milestone rewards automatically",
    "Complete all 30 days to claim ₹10",
  ];

  return (
    <section
      className={`${styles.guideSection} ${display ? styles.display : ""}`}
    >
      <div className={styles.left}>
        <div>
          <span className={styles.badge}>Contribution Guide</span>

          <h2>How does Contribution Vault work?</h2>
        </div>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>0{index + 1}</div>

              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
