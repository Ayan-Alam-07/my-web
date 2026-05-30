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
      cTitle={"wallet / gems-exchange-center"}
      badge="Gem EXC."
      hTitle="Gems Exchange Center"
      hText="This page explains how the Gems Exchange Center works, how eligible users can convert Gems into supported platform credits, how conversion rates are applied, and how technical issues or invalid activity are handled."
      metaInfo={[
        { title: "Effective Date", value: "May 20, 2026" },
        { title: "Last Updated", value: "May 19, 2026" },
        { title: "Owner", value: "Ayan Alam" },
        {
          title: "Operating Model",
          value: "Online-operated platform based in Ramgarh, Jharkhand, India",
        },
      ]}
      fNoticeText={[
        "Gems and other internal platform balances are virtual platform credits that may be used or exchanged only through supported VELOOP Rewards features.",
        "Exchange rates, limits, and feature availability may be updated from time to time based on platform conditions, and we aim to provide notice for major changes whenever reasonably possible.",
      ]}
      supportTitle={["Support details", "Exchange review"]}
      supportDesc={[
        "Users who believe an eligible exchange was processed incorrectly may contact support and should include their account details, exchange time, relevant screenshots, and a short explanation of the issue for review.",
        "Where a technical error, invalid activity, or incorrect balance processing is confirmed, the platform may correct the affected exchange record under current platform rules.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaGem} title="How it works" />
        <p>
          The Gems Exchange Center allows eligible users to convert Gems into
          supported platform credits, such as VEs, where that conversion option
          is currently available.
        </p>
        <p>
          All exchanges are internal platform conversions only. They do not
          represent bank transfers, cash conversion, or any external financial
          exchange service.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Exchange rules" />
        <ul>
          <li>
            Exchange availability may depend on current conversion settings,
            supported balances, and eligibility checks.
          </li>
          <li>
            Conversion rates are set by the platform and may be updated from
            time to time as the platform economy or feature rules change.
          </li>
          <li>
            Where reasonably possible, major conversion changes should be
            communicated in advance through the platform or relevant help
            content.
          </li>
          <li>
            Completed exchanges are generally final, but users who experience a
            technical issue during conversion may contact support for manual
            review.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Manipulated balances, exploit-driven exchanges, fraudulent
            accumulation, or abuse of exchange features are not allowed.
          </li>
          <li>
            Where invalid exchange activity is confirmed, the platform may
            adjust balances, reverse the affected exchange, limit access to
            exchange features, or apply account restrictions under platform
            rules.
          </li>
          <li>
            Internal platform credit balances may be corrected if they were
            created, credited, or converted improperly due to error or misuse.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Gems Exchange is an internal virtual-credit conversion feature.
          Exchange rates, eligibility, and resulting balances are applied
          according to current platform rules and may be reviewed where a
          technical issue, verification problem, or misuse concern is
          identified.
        </p>
      </section>
    </LegalHero>
  );
};

export default GemsExchangeCenterPage;
