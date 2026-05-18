import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaUsers,
  FaCommentSlash,
  FaUserShield,
  FaFlag,
  FaBan,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Community Rules" },
  { title: "Applies To", value: "All users and platform interactions" },
];

const supportTitle = ["Community support", "Enforcement note"];

const supportDesc = [
  "Users who wish to report abusive conduct, harmful behavior, impersonation, spam, or other community-related concerns may contact VELOOP Rewards support with relevant details and evidence where available.",
  "VELOOP Rewards may review user conduct reports, but moderation actions, user restrictions, and enforcement outcomes remain subject to internal review and platform discretion.",
];

const finalNotice = [
  "These Community Rules should be read together with the Terms & Conditions, Anti-Fraud Policy, Privacy Policy, Disclaimer, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, users agree to behave honestly, respectfully, and lawfully, and acknowledge that abusive, disruptive, misleading, or harmful conduct may lead to warnings, restrictions, suspension, or permanent removal from the platform.",
];

const prohibitedConduct = [
  "Harassment, threats, hate speech, intimidation, or abusive language directed at users, moderators, support staff, or any third party.",
  "Spam, misleading content, repetitive promotion, fake engagement, deceptive submissions, or intentionally disruptive behavior.",
  "Impersonation of another person, false identity claims, or misleading statements intended to obtain platform benefits or deceive others.",
  "Posting, sending, or sharing unlawful, offensive, infringing, harmful, sexually explicit, or malicious material through any platform communication feature.",
  "Attempting to manipulate support systems, moderation processes, referral systems, or community-facing interactions through deception or abuse.",
  "Encouraging others to break platform rules, exploit systems, harass users, or interfere with fair platform participation.",
];

const CommunityRulesPage = () => {
  return (
    <LegalHero
      badge="Community Rules"
      hTitle="Community Rules"
      hText="These Community Rules explain the standards of behavior expected from users of VELOOP Rewards and the conduct restrictions that apply across platform interactions, support channels, referral activity, and community-related features."
      metaInfo={metaInfo}
      crumb
      cTitle="Community Rules"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important conduct notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards is intended to operate as a fair, respectful, and
            safe digital rewards platform. Users must not misuse communication
            channels, platform tools, referral systems, support processes, or
            any interactive feature in a way that harms other users, disrupts
            operations, or undermines the platform environment.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaUsers} title="Expected user behavior" />
        <div className={styles.card}>
          <p>
            Users are expected to participate in VELOOP Rewards in a lawful,
            honest, respectful, and fair manner. This includes engaging with
            tasks, features, support communication, and any community-facing
            elements without deception, hostility, abuse, or disruptive conduct.
          </p>
          <p>
            The platform expects users to communicate professionally when
            contacting support, reporting issues, or participating in any
            feature that involves other users, promotional networks, teams,
            leaderboards, or future social components.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaCommentSlash} title="Prohibited conduct" />
        <div className={styles.card}>
          <p>
            The following conduct is prohibited and may result in moderation or
            enforcement action even where the behavior occurs outside a
            public-facing community area but still affects platform safety,
            operations, or user trust:
          </p>
          <ul>
            {prohibitedConduct.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaUserShield}
          title="Support and communication standards"
        />
        <div className={styles.card}>
          <p>
            When contacting VELOOP Rewards through support email, legal
            communication channels, or any future messaging or community tools,
            users must provide truthful information and communicate in a
            respectful and non-abusive manner. Repeated spam, threats,
            manipulation attempts, or intentionally false claims may be treated
            as policy violations.
          </p>
          <p>
            The platform may refuse support, limit communication, or escalate
            enforcement where a user repeatedly engages in hostile, misleading,
            or disruptive behavior toward support teams, moderators, or platform
            representatives.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaFlag} title="Reporting and moderation" />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may review reports relating to user abuse,
            harassment, impersonation, spam, harmful content, manipulation, or
            community disruption. Users are encouraged to provide enough
            context, account details, screenshots, or timestamps where available
            to assist with review.
          </p>
          <p>
            The platform is not required to act on every report in a specific
            way, but may take action where it believes moderation or safety
            intervention is appropriate. Internal moderation standards, evidence
            assessment methods, and enforcement thresholds may change over time.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaBan} title="Rule enforcement" />
        <div className={styles.card}>
          <p>
            Violations of these Community Rules may lead to warning, content
            removal, limitation of features, communication restrictions,
            referral restrictions, reward removal, temporary suspension,
            permanent suspension, or account closure depending on severity and
            related policy impact.
          </p>
          <p>
            Where user conduct also involves fraud, abuse, fake referrals,
            technical misuse, or reward manipulation, VELOOP Rewards may apply
            additional action under the Anti-Fraud Policy, Terms & Conditions,
            or related legal documents.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Platform discretion and safe environment"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to interpret, apply, and enforce
            these Community Rules in a way that helps maintain user safety,
            business continuity, service reliability, and a respectful platform
            environment.
          </p>
          <p>
            The absence of a specific example in these rules does not mean
            related harmful conduct is allowed. The platform may take action
            against behavior that it reasonably believes is abusive, unsafe,
            deceptive, disruptive, or inconsistent with the intended operation
            of VELOOP Rewards.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default CommunityRulesPage;
