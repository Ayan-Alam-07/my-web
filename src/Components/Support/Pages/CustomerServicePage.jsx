import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SupportChannels from "../components/SupportChannels";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import ContactForm from "../components/ContactForm";
import CommonNavArr from "../../CommonComponents/CommonNavArr";

import styles from "./CustomerServicePage.module.css";

export default function CustomerServicePage() {
  return (
    <main className={styles.page}>
      <div className="container-fluid px-0">
        <CommonNavArr id={22} navigation={-1} />
        <Hero />
        <div className="container">
          <Stats />
          <SupportChannels />
          <Testimonials />
          <Faq />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
