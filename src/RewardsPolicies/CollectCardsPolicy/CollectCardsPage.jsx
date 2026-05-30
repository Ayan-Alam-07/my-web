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
      cTitle={"future / collect-cards"}
      badge="Coming Soon"
      hTitle="Collect Cards"
      hText="Coming soon: Collect Cards is an upcoming gamified feature where users may unlock digital collectible cards through eligible platform activity. Final card sets, rarity rules, rewards, and availability will be announced when the feature is officially launched."
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
        "Collect Cards is an upcoming feature that we are developing to make the platform more fun and rewarding through digital collection progress.",
        "Card sets, rarity systems, event timing, and completion rewards may evolve over time as the feature is tested, improved, and prepared for release.",
      ]}
      supportTitle={["Support details", "Future feature notice"]}
      supportDesc={[
        "Support may not be able to confirm final card mechanics, rarity rules, or set rewards until the feature is officially launched.",
        "We will publish clear collection rules, availability details, and support guidance once Collect Cards becomes live.",
      ]}
      isRewards={true}
    >
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Current status" />
        <p>
          Collect Cards is not live yet and no card set, rarity event, or
          completion reward is currently available to claim. This page is a
          feature preview intended to explain the planned direction of the
          feature before official launch.
        </p>
      </section>

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
        <SectionHead Icon={FaCheckCircle} title="What users can expect" />
        <ul>
          <li>
            Users may be able to unlock cards through eligible activities,
            special events, progress milestones, or limited-time campaigns.
          </li>
          <li>
            Some cards may be common while others may be rare, seasonal, or
            event-based depending on the launch design.
          </li>
          <li>
            Completing a set may unlock in-platform recognition, bonus content,
            or supported reward benefits if announced at launch.
          </li>
        </ul>
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
            Cards are digital collectibles designed for in-platform enjoyment.
            They are linked to your account and cannot be traded, transferred,
            or sold to other users unless the platform later introduces a
            separate trading feature.
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

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="What is not available yet" />
        <ul>
          <li>Users cannot currently collect or open card sets.</li>
          <li>
            No card completion reward can currently be requested or claimed.
          </li>
          <li>
            Trading, gifting, or transferring cards is not currently supported.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          We are building Collect Cards as a future gamified feature for users
          who enjoy unlocking and completing digital card sets. Until the
          feature is officially released, all card mechanics, rewards, and
          availability remain preliminary and may change during development.
        </p>
      </section>
    </LegalHero>
  );
};

export default CollectCardsPage;
