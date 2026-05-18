import React from "react";
import LegalHero from "../common/LegalHero";
import SectionHead from "../common/SectionHead";
import styles from "../common/LegalDocs.module.css";
import {
  FaExclamationTriangle,
  FaUndoAlt,
  FaCoins,
  FaBan,
  FaClipboardCheck,
  FaBalanceScale,
} from "react-icons/fa";

const metaInfo = [
  { title: "Effective Date", value: "Launch Date" },
  { title: "Last Updated", value: "May 18, 2026" },
  { title: "Document Type", value: "Refund & Cancellation Policy" },
  { title: "Applies To", value: "Platform credits and memberships" },
];

const supportTitle = ["Refund-related support", "Verification note"];

const supportDesc = [
  "Users with questions about memberships, platform access, joining conditions, or cancellation-related issues should contact the support team with the relevant account details for review.",
  "Where a user raises a complaint regarding accidental action, access status, or membership activation, VELOOP Rewards may review the request, but any decision remains subject to platform records, policy rules, and applicable law.",
];

const finalNotice = [
  "This Refund & Cancellation Policy should be read together with the Terms & Conditions, Platform Currency Policy, Withdrawal & Reward Verification Policy, Disclaimer, and other legal pages published by VELOOP Rewards.",
  "By using VELOOP Rewards, joining paid features, or spending platform-based credits on optional access or digital benefits, users acknowledge that cancellations, reversals, and refunds are limited and may not be available once a feature, credit use, or membership action has been completed or activated.",
];

const RefundCancellationPage = () => {
  return (
    <LegalHero
      badge="Refund & Cancellation Policy"
      hTitle="Refund & Cancellation Policy"
      hText="This policy explains how VELOOP Rewards handles cancellations, non-refundable platform credit usage, optional memberships, and requests relating to reversals or refund claims connected to digital platform features."
      metaInfo={metaInfo}
      crumb
      cTitle="Refund & Cancellation Policy"
      fNoticeText={finalNotice}
      supportTitle={supportTitle}
      supportDesc={supportDesc}
    >
      <section className={styles.noticeSection}>
        <SectionHead
          Icon={FaExclamationTriangle}
          title="Important refund notice"
        />
        <div className={styles.noticeBox}>
          <p>
            VELOOP Rewards primarily operates through digital platform features,
            virtual credits, and platform-managed access conditions. Because
            these are digital, promotional, and non-physical services, refunds,
            reversals, and cancellations are limited and may not be available
            once a feature has been used, activated, consumed, or applied to an
            account.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaUndoAlt} title="General cancellation policy" />
        <div className={styles.card}>
          <p>
            Users may stop using VELOOP Rewards at any time by ceasing access to
            the platform or by requesting account closure through the support
            process. However, stopping platform use does not automatically
            cancel previously completed reward actions, digital access grants,
            membership activations, or prior uses of platform-managed credits.
          </p>
          <p>
            Where an optional membership, joining feature, or special access
            mode has already been activated on the user’s account, that
            activation may remain effective for the applicable account state or
            platform period unless the platform decides otherwise.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaCoins}
          title="No refund for spent platform credits"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards may allow users to spend internal digital credits
            such as VEs, Tokens, Gems, Spins, or similar platform-controlled
            units in order to unlock features, access optional participation
            modes, obtain digital utilities, or activate reward-related
            functions.
          </p>
          <p>
            Unless expressly stated otherwise by the platform, any such use of
            platform credits is final and non-refundable once the relevant
            action has been completed. This includes, without limitation,
            optional joining fees, membership activations, unlock actions,
            exchange actions, spin use, feature access, or similar digital
            consumption of platform-managed value.
          </p>
          <p>
            As currently described by the platform, optional joining-related
            access involving 250 VEs and 70 XP is not mandatory and, once
            applied, is non-refundable and cannot be reversed merely because the
            user later changes their mind.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBan}
          title="Situations where refunds are not available"
        />
        <div className={styles.card}>
          <p>
            Refunds, reversals, or compensation are generally not available in
            the following situations unless required by applicable law or
            expressly approved by VELOOP Rewards:
          </p>
          <ul>
            <li>
              User dissatisfaction after a feature, membership, or digital
              unlock has already been activated.
            </li>
            <li>
              Voluntary use of platform credits on optional features, events,
              access modes, or in-platform utilities.
            </li>
            <li>
              Loss of credits, rewards, or access caused by policy violations,
              account suspension, fraud review, or abuse detection.
            </li>
            <li>
              Third-party ad failure, offerwall issues, survey rejection,
              campaign expiry, or external service interruption.
            </li>
            <li>
              Feature changes, reward adjustments, redemption delays,
              maintenance, or service pauses made under platform rights.
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead Icon={FaClipboardCheck} title="Exceptional review cases" />
        <div className={styles.card}>
          <p>
            In limited situations, VELOOP Rewards may review a complaint
            relating to an accidental action, technical error, duplicate
            platform deduction, or clearly verifiable system fault. Any such
            review is discretionary and does not create a general entitlement to
            refund, reversal, or compensation.
          </p>
          <p>
            Where the platform decides to review a request, the user may be
            asked to provide account details, screenshots, timestamps,
            transaction context, or any other information reasonably required to
            verify the issue. Platform records, fraud checks, and system logs
            may be used when assessing whether any corrective action is
            appropriate.
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <SectionHead
          Icon={FaBalanceScale}
          title="Platform discretion and legal position"
        />
        <div className={styles.card}>
          <p>
            VELOOP Rewards reserves the right to decide whether any correction,
            cancellation, restoration, or refund is appropriate based on
            platform records, fraud prevention needs, abuse indicators, system
            evidence, business rules, and applicable legal obligations. Any
            goodwill action taken in one case does not create a precedent or a
            continuing obligation for future cases.
          </p>
          <p>
            Nothing in this policy limits any non-excludable right that may
            apply under mandatory law. However, to the maximum extent permitted
            by law, digital platform credits, virtual balances, optional account
            upgrades, and activated digital features are treated as
            non-refundable unless the platform explicitly states otherwise.
          </p>
        </div>
      </section>
    </LegalHero>
  );
};

export default RefundCancellationPage;
