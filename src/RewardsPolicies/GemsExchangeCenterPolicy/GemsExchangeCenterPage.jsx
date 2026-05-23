import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaGem,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const GemsExchangeCenterPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Gems Exchange Center"
      hText="This page explains the Gems exchange feature, including exchange logic, conversion controls, reversals, and feature restrictions."
      metaInfo={[
        { title: "Effective Date", value: "Launch Date" },
        { title: "Last Updated", value: "May 19, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "Gems and other internal platform currencies are virtual digital units controlled entirely by VELOOP Rewards and may be exchanged only through approved in-platform systems.",
        "Exchange rates, limits, conversion rules, or feature availability may be changed, suspended, corrected, or removed at any time.",
      ]}
      supportTitle={["Support details", "Exchange review"]}
      supportDesc={[
        "Users who believe an eligible exchange action was incorrectly processed may contact support for review subject to available system logs.",
        "The platform may reverse, deny, or correct exchange transactions where abuse, error, or invalid activity is detected.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaGem} title="How it works" />
        <p>
          The Gems Exchange Center allows eligible users to convert Gems into
          supported in-platform credits such as VEs where the platform makes
          such conversion available. All exchanges are internal platform actions
          only and do not represent external financial conversion rights.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Exchange rules" />
        <ul>
          <li>
            Exchange availability may depend on current conversion settings,
            platform balances, and eligibility checks.
          </li>
          <li>
            Conversion rates are platform-controlled and may be changed without
            prior notice.
          </li>
          <li>
            Completed exchanges may be treated as final except where correction,
            fraud review, or technical error requires reversal.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Manipulated balances, exploit-driven exchanges, fraudulent
            accumulation, or system abuse are prohibited.
          </li>
          <li>
            Invalid exchange activity may lead to reversal, balance adjustment,
            exchange suspension, or account action.
          </li>
          <li>
            Internal currency balances remain platform-managed and may be
            corrected if they were issued improperly.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Gems exchange is an internal virtual-credit conversion feature only.
          Exchange rates, eligibility, and resulting balances remain subject to
          platform control, review, and correction.
        </p>
      </section>
    </LegalHero>
  );
};

export default GemsExchangeCenterPage;
