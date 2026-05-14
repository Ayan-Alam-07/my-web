import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "Missing points",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", topic: "Missing points", message: "" });
  };

  return (
    <section id="contact" className={styles.wrap}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <p className={styles.kicker}>Still need help?</p>
          <h2 className={styles.title}>
            Send a message. <br />
            <span className={styles.accent}>A real human replies.</span>
          </h2>
          <p className={styles.sub}>
            We read every message. Most are answered within 30 minutes during
            the day, and within 4 hours overnight.
          </p>

          <ul className={styles.bullets}>
            <li>
              <span className={styles.check}>✓</span> No bots, no scripts
            </li>
            <li>
              <span className={styles.check}>✓</span> Encrypted &amp; private
            </li>
            <li>
              <span className={styles.check}>✓</span> Refunds &amp; credits
              processed instantly
            </li>
          </ul>
        </div>

        <form className={styles.form} onSubmit={submit}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>Name</span>
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Jane Doe"
              />
            </label>
            <label className={styles.field}>
              <span>Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@email.com"
              />
            </label>
          </div>

          <label className={styles.field}>
            <span>What's it about?</span>
            <select value={form.topic} onChange={update("topic")}>
              <option>Missing points</option>
              <option>Redemption issue</option>
              <option>Account / login</option>
              <option>Billing</option>
              <option>Other</option>
            </select>
          </label>

          <label className={styles.field}>
            <span>Tell us what's going on</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Order ID, dates, anything that helps us help you faster…"
            />
          </label>

          <button type="submit" className={styles.submit}>
            {sent ? "✓ Message sent — we'll reply soon" : "Send message"}
          </button>
          <p className={styles.fine}>
            By sending, you agree to our privacy policy. We never share your
            data.
          </p>
        </form>
      </div>
    </section>
  );
}
