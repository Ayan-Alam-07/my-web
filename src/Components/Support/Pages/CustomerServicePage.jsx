import React from "react";
import Hero from "../components/Hero";
import SecFooter from "../../CommonComponents/SecFooter";
import styles from "./CustomerServicePage.module.css";

export default function CustomerServicePage() {
  return (
    <main className={styles.page}>
      <Hero />
      <SecFooter mt={0} mb={30} name={""} link={""} />
    </main>
  );
}
