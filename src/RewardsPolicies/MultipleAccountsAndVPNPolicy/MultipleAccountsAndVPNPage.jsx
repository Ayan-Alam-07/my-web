import React from "react";
import styles from "../FeaturePolicyPage.module.css";
import LegalHero from "../../Legal/common/LegalHero";
import SectionHead from "../../Legal/common/SectionHead";
import {
  FaUsersSlash,
  FaGlobe,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const MultipleAccountsAndVPNPage = () => {
  return (
    <LegalHero
      crumb={true}
      cTitle={"safety / multiple-accounts-and-vpn"}
      badge="Safety Rules"
      hTitle="Multiple Accounts and VPN Rules"
      hText="This page explains VELOOP Rewards rules regarding duplicate accounts, self-referrals, masked access, and VPN-related restrictions."
      metaInfo={[
        { title: "Effective Date", value: "May 21, 2026" },
        { title: "Last Updated", value: "May 23, 2026" },
        { title: "Multiple Accounts", value: "Not allowed" },
        {
          title: "VPN Usage",
          value:
            "Use of VPNs or proxies to hide location or bypass checks is prohibited",
        },
      ]}
      fNoticeText={[
        "To keep rewards fair for genuine users, each person may use only the account permitted for personal use unless the platform expressly allows otherwise.",
        "Duplicate accounts, self-referrals, location masking, or confirmed abuse patterns may lead to reward cancellation, account review, restriction, suspension, or permanent ban under platform rules.",
      ]}
      supportTitle={["Support details", "Safety notice"]}
      supportDesc={[
        "Users who believe an account restriction was applied incorrectly may contact support with their account information for review.",
        "The platform may use device, network, behavior, and account signals to detect duplicate ownership, masked access, or automated abuse patterns. Normal residential, office, or public network usage does not by itself mean a violation, but unusual combinations of risk signals may trigger review.",
      ]}
      isRewards={true}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaUsersSlash} title="Multiple account rule" />
        <p>
          VELOOP Rewards does not allow users to create, control, or benefit
          from multiple accounts for the same person, household, device pattern,
          or abuse purpose unless specifically permitted by the platform.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaGlobe} title="VPN and masked access" />
        <p>
          Users must not use VPNs, proxy services, or other masking tools to
          hide their real location, bypass regional restrictions, manipulate
          eligibility, or interfere with platform security checks. Access from
          masked or misleading network sources may trigger account review or
          additional verification.
        </p>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaShieldAlt} title="Possible account actions" />
        <ul>
          <li>
            Reward cancellation or reversal where activity is found invalid.
          </li>
          <li>
            Referral invalidation for duplicate, self, or inauthentic referrals.
          </li>
          <li>
            Withdrawal review, delay, or denial where security concerns arise.
          </li>
          <li>
            Account restriction, suspension, or permanent termination for
            repeated or serious violations.
          </li>
        </ul>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaExclamationTriangle} title="Important notice" />
        <p>
          Some regions, devices, or usage environments may be restricted where
          required for legal, compliance, security, or operational reasons.
          Users should access the platform only through approved and genuine
          usage conditions.
        </p>
      </section>
    </LegalHero>
  );
};

export default MultipleAccountsAndVPNPage;
