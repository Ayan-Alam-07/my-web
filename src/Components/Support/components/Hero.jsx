import React from "react";
import styles from "./Hero.module.css";
import CommonNavArr from "../../CommonComponents/CommonNavArr";
import Stats from "./Stats";
import SupportChannels from "./SupportChannels";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <CommonNavArr id={22} navigation={-1} />
      <section>
        <div className={styles.hero}>
          <div className={styles.inner}>
            <span className={styles.badge}>
              <span className={styles.dot} /> Avg. response under 2 minutes
            </span>
            <h1 className={styles.title}>
              Stuck on your rewards? <br />
              <span className={styles.accent}>We'll fix it — fast.</span>
            </h1>
            <p className={styles.sub}>
              Missing points, redemption issues, account problems. Real humans,
              real fixes. No bots looping you in circles.
            </p>
            <div className={styles.actions}>
              <a href="#contact" className={styles.primary}>
                Talk to support
              </a>
              <a href="#faq" className={styles.ghost}>
                Browse FAQ →
              </a>
            </div>
            <div className={styles.proof}>
              <div className={styles.avatars}>
                <span />
                <span />
                <span />
                <span />
              </div>
              <p>
                <strong>4.9/5</strong> from <strong>12,000+</strong> happy
                members
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Stats />
        <SupportChannels />
        <Testimonials />
        <Faq />
        <ContactForm />
      </div>
    </div>
  );
}
