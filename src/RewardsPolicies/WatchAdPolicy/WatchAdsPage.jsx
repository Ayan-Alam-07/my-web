import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaPlayCircle,
  FaExclamationTriangle,
  FaCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";

const WatchAdsPage = () => {
  return (
    <LegalHero
      crumb={true}
      badge="Feature Rules"
      hTitle="Watch Ads"
      hText="This page explains how ad-viewing rewards work on VELOOP Rewards, including eligibility, tracking, limitations, review conditions, and invalid activity rules."
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
        "Ad rewards are promotional platform rewards and remain subject to ad availability, campaign conditions, tracking validation, and policy compliance.",
        "Reward values may vary by campaign, placement, geography, user eligibility, ad inventory, and platform adjustments.",
      ]}
      supportTitle={["Support details", "Review notice"]}
      supportDesc={[
        "Users experiencing missing ad credits should contact official platform support with relevant account details and timing information where available.",
        "Reward claims may be reviewed and are not automatically approved solely because an ad was viewed or opened.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaPlayCircle} title="How it works" />
        <p>
          Users may earn variable promotional rewards by viewing eligible
          advertisements made available through the platform or its advertising
          partners. Reward availability, duration, and payout amounts may differ
          between sessions and users.
        </p>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaCheckCircle} title="Eligibility and rewards" />
        <ul>
          <li>Ad rewards are variable and may change without prior notice.</li>
          <li>
            Users must complete the ad flow in a valid and trackable manner.
          </li>
          <li>
            Credits may depend on campaign completion, device validation, and
            fraud checks.
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Restrictions" />
        <ul>
          <li>
            Automated viewing, bot behavior, emulator usage, VPN use, ad abuse,
            or artificial engagement are prohibited.
          </li>
          <li>
            Invalid, duplicate, manipulated, or suspicious ad activity may
            result in zero credit, reversal, restriction, or account suspension.
          </li>
          <li>
            Third-party ad failures or tracking issues may prevent rewards from
            being issued.
          </li>
        </ul>
      </section>
      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Summary and caution" />
        <p>
          Watching ads does not guarantee a fixed reward on every attempt.
          Ad-based rewards remain subject to eligibility, campaign availability,
          technical tracking, and platform review.
        </p>
      </section>
    </LegalHero>
  );
};

export default WatchAdsPage;
