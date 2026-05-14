import React from "react";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    quote:
      "Lost 8,000 points after a redemption glitch. Support credited them back within an hour. Honestly didn't expect that.",
    name: "Aarav S.",
    role: "Gold member · 3 yrs",
  },
  {
    quote:
      "Most rewards programs ignore you. These guys actually pick up the phone and fix things. Refreshing.",
    name: "Maya T.",
    role: "Platinum member",
  },
  {
    quote:
      "Got a real human in 90 seconds at 2am. They walked me through redeeming a flight upgrade. 10/10.",
    name: "Daniel K.",
    role: "Member since 2022",
  },
];

const trustLogos = ["TRUSTPILOT", "G2", "PCI-DSS", "SOC 2", "GDPR"];

export default function Testimonials() {
  return (
    <section className={styles.wrap}>
      <header className={styles.head}>
        <p className={styles.kicker}>Trusted by members</p>
        <h2 className={styles.title}>
          We earn your trust the boring way: by actually showing up.
        </h2>
      </header>

      <div className={styles.grid}>
        {reviews.map((r) => (
          <figure key={r.name} className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <blockquote className={styles.quote}>"{r.quote}"</blockquote>
            <figcaption className={styles.who}>
              <div className={styles.avatar}>{r.name[0]}</div>
              <div>
                <div className={styles.name}>{r.name}</div>
                <div className={styles.role}>{r.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className={styles.logos}>
        {trustLogos.map((l) => (
          <span key={l} className={styles.logo}>
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}
