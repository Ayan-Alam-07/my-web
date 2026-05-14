import React, { useState } from "react";
import styles from "./Faq.module.css";

const faqs = [
  {
    q: "My points didn't show up after a purchase. What now?",
    a: "Points usually post within 48 hours. If they're missing after that, open a ticket with your order ID and our specialist team credits them within 24 hours — guaranteed.",
  },
  {
    q: "Can I transfer points to a friend or family member?",
    a: "Yes. Gold and Platinum members can transfer up to 10,000 points per month. Head to your account → Rewards → Transfer.",
  },
  {
    q: "How do I redeem points for cashback or gift cards?",
    a: "Open the Rewards tab, choose 'Redeem', and pick any partner brand. Cashback lands in your linked account within 1 business day.",
  },
  {
    q: "I forgot my password and can't log in.",
    a: "Use 'Forgot password' on the login screen. If you don't get the reset email within 5 minutes, contact us and we'll verify your identity manually.",
  },
  {
    q: "Are my account and payment details safe?",
    a: "We're PCI-DSS Level 1 and SOC 2 compliant. Card data is tokenized — we never store raw card numbers on our servers.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.wrap}>
      <header className={styles.head}>
        <p className={styles.kicker}>FAQ</p>
        <h2 className={styles.title}>Quick answers, no run-around</h2>
        <p className={styles.sub}>
          Most members find their answer here in under a minute.
        </p>
      </header>

      <div className={styles.list}>
        {faqs.map((f, i) => (
          <div
            key={f.q}
            className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}
          >
            <button
              className={styles.q}
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
            >
              <span>{f.q}</span>
              <span className={styles.plus}>{open === i ? "−" : "+"}</span>
            </button>
            {open === i && <div className={styles.a}>{f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}
