import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaGift,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const WatchAdBonusesPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Watch Ad Bonuses"
      hText="This page explains bonus rewards tied to ad viewing, including promotional eligibility, bonus validation, and limitations."
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
        "Watch Ad Bonuses are supplemental promotional benefits that may be offered in connection with valid ad participation and may not be available in every session or to every user.",
        "Bonus outcomes remain subject to ad completion, tracking success, campaign eligibility, abuse review, and platform rules.",
      ]}
      supportTitle={["Support details", "Bonus review"]}
      supportDesc={[
        "Users may contact support if a valid bonus claim appears missing, subject to ad logs, campaign records, and system review.",
        "The platform may deny bonus claims where tracking, eligibility, or compliance requirements are not satisfied.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaGift} title="How it works" />
        <p>
          Watch Ad Bonuses may be offered as additional promotional rewards when
          users complete eligible ad-based interactions. Bonus formats, timing,
          value, and availability may vary depending on platform settings and
          partner campaign rules.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Bonus rules" />
        <ul>
          <li>
            Bonus rewards may depend on valid ad completion and successful
            tracking.
          </li>
          <li>
            The platform may limit bonus availability, change bonus values, or
            withdraw bonus campaigns at any time.
          </li>
          <li>
            Not every ad interaction qualifies for a bonus, even where ordinary
            ad rewards may still apply.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Invalid activity" />
        <ul>
          <li>
            Artificial ad engagement, repeated invalid claims, bot usage, or
            manipulation of ad bonus systems is prohibited.
          </li>
          <li>
            Invalid activity may result in bonus cancellation, reward reversal,
            or broader account enforcement action.
          </li>
          <li>
            Third-party ad or campaign failures may prevent bonus crediting.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Watch Ad Bonuses are optional promotional additions, not guaranteed
          entitlements. They depend on successful ad completion, campaign
          conditions, and valid system tracking.
        </p>
      </section>
    </LegalHero>
  );
};

export default WatchAdBonusesPage;
