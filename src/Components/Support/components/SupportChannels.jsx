import React from "react";
import styles from "./SupportChannels.module.css";

const channels = [
  {
    icon: "💬",
    title: "Live chat",
    desc: "Tap in and get a real agent in under 2 minutes. No menus, no hold music.",
    meta: "Online now",
    cta: "Start chat",
    online: true,
  },
  {
    icon: "✉️",
    title: "Email support",
    desc: "Drop us the details and we'll reply within 4 hours — usually much sooner.",
    meta: "support@rewards.app",
    cta: "Send email",
  },
  {
    icon: "📞",
    title: "Call us",
    desc: "Prefer voice? Speak directly with a senior member of the rewards team.",
    meta: "Mon–Sun · 24/7",
    cta: "Request call",
  },
  {
    icon: "🎯",
    title: "Points specialist",
    desc: "Missing or delayed points? A specialist investigates and credits within 24h.",
    meta: "Dedicated team",
    cta: "Open ticket",
  },
];

export default function SupportChannels() {
  return (
    <section className={styles.wrap}>
      <header className={styles.head}>
        <p className={styles.kicker}>How we help</p>
        <h2 className={styles.title}>Pick the fastest way to reach us</h2>
        <p className={styles.sub}>
          Every channel goes to the same trained team — no tier-1 ping pong.
        </p>
      </header>

      <div className={styles.grid}>
        {channels.map((c) => (
          <article key={c.title} className={styles.card}>
            <div className={styles.icon} aria-hidden>
              {c.icon}
            </div>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardDesc}>{c.desc}</p>
            <div className={styles.meta}>
              {c.online && <span className={styles.dot} />}
              {c.meta}
            </div>
            <button className={styles.cta}>{c.cta} →</button>
          </article>
        ))}
      </div>
    </section>
  );
}
