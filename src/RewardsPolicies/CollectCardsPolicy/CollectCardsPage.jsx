import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaClone,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const CollectCardsPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Future Feature Rules"
      hTitle="Collect Cards"
      hText="This page provides preliminary rules for the upcoming Collect Cards feature, including collection logic, completion conditions, and platform control over rewards and card sets."
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
        "Collect Cards is an upcoming feature and may be modified, delayed, or withdrawn before or after release.",
        "Future card sets, completion rewards, rarity systems, and event conditions will remain entirely platform-controlled.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may not confirm final card-collection mechanics until the feature is officially available.",
        "No preview statement guarantees card availability, completion rewards, or future event continuity.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaClone} title="Feature overview" />
        <p>
          Collect Cards may be introduced as a gamified collection system where
          users earn, unlock, or gather digital card items through eligible
          platform activity. Card types, rarity levels, set mechanics, and
          collection rewards may vary by season, event, or platform update.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Expected collection rules" />
        <ul>
          <li>
            Card availability, set requirements, and completion benefits may be
            updated or reset by the platform.
          </li>
          <li>
            The platform may limit access to cards based on activity, time
            period, campaign participation, or account status.
          </li>
          <li>
            Collected cards remain virtual platform items only and do not create
            independent ownership or transfer rights.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Integrity and enforcement" />
        <ul>
          <li>
            Exploit-driven card acquisition, artificial completion, or
            manipulated event participation will be prohibited.
          </li>
          <li>
            The platform may remove cards, reset progress, or revoke rewards
            where abuse or system error is detected.
          </li>
          <li>
            Preview notices do not guarantee launch timing or permanent
            availability.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Collect Cards is a future feature notice only. Card rules, rewards,
          and completion mechanics may change substantially before release or
          later updates.
        </p>
      </section>
    </LegalHero>
  );
};

export default CollectCardsPage;
