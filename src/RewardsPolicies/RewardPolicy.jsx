import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./RewardPolicy.module.css";
import LegalHero from "../Legal/common/LegalHero";
import SectionHead from "../Legal/common/SectionHead";
import links from "../Legal/MasterLegalPage.module.css";

import {
  FaBookOpen,
  FaCoins,
  FaWallet,
  FaMoneyCheckAlt,
  FaUserShield,
  FaRocket,
  FaSearch,
  FaChevronDown,
  FaChevronUp,
  FaQuestionCircle,
} from "react-icons/fa";

const categoryCards = [
  {
    key: "getting-started",
    title: "Getting Started",
    desc: "Understand VELOOP Rewards, account basics, joining, and virtual platform credits.",
    icon: FaBookOpen,
  },
  {
    key: "earning-rewards",
    title: "Earning Rewards",
    desc: "Learn how tasks, ads, spins, missions, levels, and bonus systems work.",
    icon: FaCoins,
  },
  {
    key: "wallet-exchange",
    title: "Wallet & Exchange",
    desc: "See how VEs, Gems, Tokens, Spins, and exchange features are used inside the platform.",
    icon: FaWallet,
  },
  {
    key: "withdrawals",
    title: "Withdrawals",
    desc: "Review redemption limits, payment methods, verification checks, and payout review conditions.",
    icon: FaMoneyCheckAlt,
  },
  {
    key: "safety-rules",
    title: "Safety & Account Rules",
    desc: "Check anti-fraud rules, referral misuse limits, restricted behavior, and account enforcement policies.",
    icon: FaUserShield,
  },
  {
    key: "future-features",
    title: "Future Features",
    desc: "Preview features that may launch later and remain subject to change before release.",
    icon: FaRocket,
  },
];

const routeMap = [
  { label: "Help Center", route: "/help-center" },
  {
    label: "What is VELOOP Rewards?",
    route: "/help-center/getting-started/what-is-veloop-rewards",
  },
  {
    label: "Platform Currencies",
    route: "/help-center/getting-started/platform-currencies",
  },
  {
    label: "Join Membership",
    route: "/help-center/getting-started/join-membership",
  },
  { label: "Watch Ads", route: "/help-center/earning/watch-ads" },
  { label: "Daily Rewards", route: "/help-center/earning/daily-rewards" },
  { label: "Mine & earn", route: "/help-center/earning/mining-rewards" },
  { label: "Tap and Earn", route: "/help-center/earning/tap-and-earn" },
  { label: "Solve Captcha", route: "/help-center/earning/solve-captcha" },
  { label: "Streak Rewards", route: "/help-center/earning/streak-rewards" },
  { label: "Spin the Wheel", route: "/help-center/earning/spin-the-wheel" },
  {
    label: "Missions and Badges",
    route: "/help-center/earning/missions-and-badges",
  },
  { label: "Level System", route: "/help-center/earning/level-system" },
  { label: "Watch Ad Bonuses", route: "/help-center/earning/watch-ad-bonuses" },
  {
    label: "Leaderboard Rewards",
    route: "/help-center/earning/leaderboard-rewards",
  },
  { label: "Follow and Earn", route: "/help-center/earning/follow-and-earn" },
  { label: "Wallet Overview", route: "/help-center/wallet/wallet-overview" },
  {
    label: "Gems Exchange Center",
    route: "/help-center/wallet/gems-exchange-center",
  },
  { label: "Swap Center", route: "/help-center/wallet/swap-center" },
  {
    label: "Withdrawals",
    route: "/help-center/withdrawals/how-withdrawals-work",
  },
  {
    label: "Verification Review",
    route: "/help-center/withdrawals/reward-verification",
  },
  { label: "Referral Rewards", route: "/help-center/safety/referral-rewards" },
  {
    label: "Multiple Accounts and VPN",
    route: "/help-center/safety/multiple-accounts-and-vpn",
  },
  {
    label: "Bots, Emulator, Auto Clickers",
    route: "/help-center/safety/bot-emulator-autoclicker-rules",
  },
  { label: "Promo Codes", route: "/help-center/safety/promo-codes" },
  { label: "Lucky Draw", route: "/help-center/future/lucky-draw" },
  {
    label: "Referral Milestones",
    route: "/help-center/future/referral-milestones",
  },
  { label: "Team Battle", route: "/help-center/future/team-battle" },
  { label: "Collect Cards", route: "/help-center/future/collect-cards" },
  { label: "Surprise Rewards", route: "/help-center/future/surprise-rewards" },
  { label: "Mystery Rewards", route: "/help-center/future/mystery-rewards" },
];

const faqGroups = [
  {
    key: "getting-started",
    title: "Getting Started",
    icon: FaBookOpen,
    items: [
      {
        q: "What is VELOOP Rewards?",
        a: "VELOOP Rewards is an online rewards platform where eligible users can complete supported platform activities such as ads, tasks, spins, referrals, games, and other features to receive in-platform rewards subject to platform rules, validation, and availability.",
        route: "/help-center/getting-started/what-is-veloop-rewards",
      },
      {
        q: "What are VEs, Gems, XP, Tokens, and Spins?",
        a: "These are virtual platform credits used inside VELOOP Rewards. VEs may be used in supported redemption flows, Gems may be exchanged according to platform rules, XP is used for level progression, Tokens may be spent on specific platform functions, and Spins are used for wheel-based features. They are not bank assets, stored-value financial instruments, or investment products.",
        route: "/help-center/getting-started/platform-currencies",
      },
      {
        q: "Is joining mandatory and is there any investment?",
        a: "Joining is optional. The platform is not presented as an investment, banking, gambling, or betting service, and internal virtual credits remain platform-controlled digital reward units.",
        route: "/help-center/getting-started/join-membership",
      },
    ],
  },
  {
    key: "earning-rewards",
    title: "Earning Rewards",
    icon: FaCoins,
    items: [
      {
        q: "How do watch ads rewards work?",
        a: "Ad rewards may be credited when a valid ad interaction is successfully completed, tracked, and accepted by the platform or ad provider. Ad availability, reward value, and successful tracking may vary.",
        route: "/help-center/earning/watch-ads",
      },
      {
        q: "How does Tap and Earn work?",
        a: "Tap and Earn is a platform activity where users may receive eligible in-platform rewards through repeated permitted interaction, subject to system limits, validation, and abuse prevention controls.",
        route: "/help-center/earning/tap-and-earn",
      },
      {
        q: "How does mining for rewards work?",
        a: "Mining rewards are based on active participation and valid device activity. Rewards may be delayed, limited, denied, or reversed if suspicious behavior, automation, multiple accounts, or abuse is detected.",
        route: "/help-center/earning/mining-rewards",
      },
      {
        q: "How do captcha tasks work?",
        a: "Captcha-based tasks require genuine user interaction and may be denied, limited, or reversed where automation, abuse, or invalid completion is detected.",
        route: "/help-center/earning/solve-captcha",
      },
      {
        q: "What are daily, streak, mission, badge, and level rewards?",
        a: "These are structured platform incentives that may depend on continuous participation, valid completion, XP growth, mission success, or event rules. Reward values and requirements may be updated at any time.",
        route: "/help-center/earning/daily-rewards",
      },
      {
        q: "How do spin, leaderboard, follow-and-earn, mining, and bonus rewards work?",
        a: "These features may provide variable or rule-based in-platform rewards depending on valid participation, campaign design, ranking, availability, and platform enforcement checks.",
        route: "/help-center/earning/spin-the-wheel",
      },
    ],
  },
  {
    key: "wallet-exchange",
    title: "Wallet & Exchange",
    icon: FaWallet,
    items: [
      {
        q: "How does the wallet system work?",
        a: "The wallet displays supported virtual balances and activity status inside the platform. Displayed balances remain subject to platform records, verification, abuse checks, and system correction rights.",
        route: "/help-center/wallet/wallet-overview",
      },
      {
        q: "How do Gems Exchange Center and Swap Center work?",
        a: "Exchange tools allow supported internal conversions between eligible virtual platform credits based on current exchange rules, limits, and platform availability. Exchange rates and supported pairings may change.",
        route: "/help-center/wallet/gems-exchange-center",
      },
    ],
  },
  {
    key: "withdrawals",
    title: "Withdrawals",
    icon: FaMoneyCheckAlt,
    items: [
      {
        q: "How do withdrawals work?",
        a: "Eligible users may request supported redemptions once the platform minimum threshold is met, subject to account checks, region support, submission accuracy, and platform approval.",
        route: "/help-center/withdrawals/how-withdrawals-work",
      },
      {
        q: "Why can a withdrawal be delayed, rejected, or reversed?",
        a: "Withdrawal requests may be reviewed, delayed, limited, denied, or reversed if suspicious activity, policy violation, invalid data, fraud indicators, tracking abuse, or verification issues are detected.",
        route: "/help-center/withdrawals/reward-verification",
      },
    ],
  },
  {
    key: "safety-rules",
    title: "Safety & Account Rules",
    icon: FaUserShield,
    items: [
      {
        q: "Are multiple accounts, self-referrals, VPNs, bots, or emulators allowed?",
        a: "No. The platform may restrict or permanently suspend accounts for duplicate accounts, fake referrals, self-referrals, VPN use, bot activity, emulator use, auto-clickers, unauthorized automation, or any suspicious engagement pattern.",
        route: "/help-center/safety/multiple-accounts-and-vpn",
      },
      {
        q: "How do referral rewards work?",
        a: "Referral rewards currently use platform-defined fixed reward logic rather than a public percentage system, and only valid referrals accepted by the platform may qualify.",
        route: "/help-center/safety/referral-rewards",
      },
      {
        q: "How do promo codes work?",
        a: "Promo codes and giveaway codes may be limited by time, validity, quantity, user eligibility, and campaign conditions. Expired, revoked, abused, or invalid codes may be denied.",
        route: "/help-center/safety/promo-codes",
      },
    ],
  },
  {
    key: "future-features",
    title: "Future Features",
    icon: FaRocket,
    items: [
      {
        q: "Are Lucky Draw, Team Battle, Referral Milestones, Collect Cards, Surprise Rewards, and Mystery Rewards live now?",
        a: "These are future or upcoming features and may be launched, revised, delayed, restricted, or cancelled at the platform’s discretion. Preview descriptions do not guarantee final mechanics, launch timing, or user eligibility.",
        route: "/help-center/future/lucky-draw",
      },
    ],
  },
];

const QuickQuestion = ({ item }) => (
  <Link to={item.route} className={styles.quickQuestion}>
    <FaQuestionCircle className={styles.quickQuestionIcon} />
    <span>{item.q}</span>
  </Link>
);

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <article className={styles.accordionItem}>
      <button
        className={styles.accordionButton}
        onClick={onToggle}
        type="button"
      >
        <span>{item.q}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className={styles.accordionPanel}>
          <p>{item.a}</p>
          <Link to={item.route} className={styles.inlineRouteLink}>
            Open full page → <span>{item.route}</span>
          </Link>
        </div>
      )}
    </article>
  );
};

const RewardPolicy = () => {
  const [query, setQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  const filteredGroups = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return faqGroups;

    return faqGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.q.toLowerCase().includes(normalized) ||
            item.a.toLowerCase().includes(normalized) ||
            group.title.toLowerCase().includes(normalized),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  const popularQuestions = faqGroups
    .flatMap((group) => group.items)
    .slice(0, 6);

  const toggleItem = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <LegalHero
      crumb={false}
      isRewards={true}
      badge="Help Center"
      hTitle="Rewards Help Center"
      hText="Learn how VELOOP Rewards works, how rewards and withdrawals are handled, what virtual credits mean, and what rules users must follow to keep their account in good standing."
      metaInfo={[
        { title: "Support Reply Time", value: "24 to 72 hours" },
        { title: "Operation Base", value: "Ramgarh, Jharkhand, India" },
        {
          title: "Platform Type",
          value: "Online rewards and engagement platform",
        },
        { title: "Main Route", value: "Help-center" },
      ]}
      fNoticeText={[
        "This Help Center is written in plain language to explain how VELOOP Rewards features and rules work for users.",
        "Formal legal terms should remain separately available through footer legal pages such as Terms & Conditions, Privacy Policy, Disclaimer, and Refund Policy.",
      ]}
      supportTitle={["Need help?", "Important note"]}
      supportDesc={[
        "Contact support for account review, deletion requests, reward issues, or withdrawal questions using the platform support channels.",
        "Help Center explanations do not override platform Terms, enforcement decisions, fraud review outcomes, or formal legal notices.",
      ]}
      cTitle={"help-center"}
    >
      <section className={styles.section}>
        <SectionHead Icon={FaSearch} title="Search help topics" />
        <div className={styles.searchWrap}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search rewards, withdrawals, referrals, virtual credits, safety rules..."
            className={styles.searchInput}
          />
        </div>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaBookOpen} title="Quick categories" />
        <div className={styles.cardGrid}>
          {categoryCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.key}
                href={`#${card.key}`}
                className={styles.categoryCard}
              >
                <div className="d-flex">
                  <Icon className={styles.cardIcon} />
                  <h3>{card.title}</h3>
                </div>
                <p>
                  {card.desc}{" "}
                  <span className={styles.moreDetails}>More details</span>
                </p>
              </a>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <SectionHead Icon={FaQuestionCircle} title="Popular questions" />
        <div className={styles.quickQuestionsGrid}>
          {popularQuestions.map((item) => (
            <QuickQuestion key={item.route} item={item} />
          ))}
        </div>
      </section>

      {filteredGroups.map((group) => {
        const Icon = group.icon;
        return (
          <section className={styles.section} id={group.key} key={group.key}>
            <SectionHead Icon={Icon} title={group.title} />
            <div className={styles.accordionList}>
              {group.items.map((item, index) => {
                const itemKey = `${group.key}-${index}`;
                return (
                  <AccordionItem
                    key={item.route}
                    item={item}
                    isOpen={!!openItems[itemKey]}
                    onToggle={() => toggleItem(itemKey)}
                  />
                );
              })}
            </div>
          </section>
        );
      })}

      <section className={styles.section}>
        <SectionHead Icon={FaBookOpen} title="Suggested routes" />
        <div className={styles.routesTableWrap}>
          <table className={styles.routesTable}>
            <thead>
              <tr>
                <th>Page</th>
                <th>Route</th>
              </tr>
            </thead>
            <tbody>
              {routeMap.map((item) => (
                <tr key={item.route}>
                  <td>{item.label}</td>
                  <td>
                    <Link to={item.route}>
                      <code style={{ color: "blue" }}>{item.route}</code>
                    </Link>
                    {/* {console.log(item.route)} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.noticeBox}>
        <SectionHead Icon={FaUserShield} title="Placement recommendation" />
        <ul>
          <li>
            Use <strong>/help-center</strong> in the main navbar.
          </li>
          <li>
            Keep Terms, Privacy, Disclaimer, Refund, and Contact links in the
            footer as formal legal pages.
          </li>
          <li>
            Link context-specific help pages from relevant product screens such
            as withdrawal, wallet, referrals, spins, and rewards pages.
          </li>
        </ul>
      </section>
    </LegalHero>
  );
};

export default RewardPolicy;
