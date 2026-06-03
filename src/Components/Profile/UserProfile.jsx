import { useEffect } from "react";
import { useList } from "../../Context/ContextStore";

import ProfileHero from "./ProfileHero/ProfileHero";
import StatsSection from "./StatsSection/StatsSection";
import EarningsOverview from "./EarningsOverview/EarningsOverview";
import XPProgress from "./XPProgress/XPProgress";
import ReferralHub from "./ReferralHub/ReferralHub";
import WithdrawalAnalytics from "./WithdrawalAnalytics/WithdrawalAnalytics";
import QuickActions from "./QuickActions/QuickActions";
import AccountDetails from "./AccountDetails/AccountDetails";
import CommonNavArr from "../CommonComponents/CommonNavArr";

import styles from "./UserProfile.module.css";

export default function UserProfile() {
  const { user, level, data, withdrawals, leaderboard, fetchCoins } = useList();

  useEffect(() => {
    fetchCoins?.();
  }, []);

  if (!user) {
    return <div className={styles.profileLoading}>Loading profile...</div>;
  }

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={23} navigation={"/Home"} />
      <div className="container px-3">
        <div className={`container mt-4 ${styles.profileWrapper}`}>
          <ProfileHero />

          <div className="mt-4 pt-1">
            <StatsSection />
          </div>

          <div className="mt-5 mt-lg-4 pt-2">
            <EarningsOverview />
          </div>

          <div className="mt-5 mt-lg-4">
            <XPProgress />
          </div>

          <div className="row mt-5">
            <div className="col-lg-8 mb-4">
              <ReferralHub />
            </div>

            <div className="col-lg-4 mb-4">
              <AccountDetails />
            </div>
          </div>

          <div className="mt-4 pt-3 pt-lg-0 mt-lg-3">
            <WithdrawalAnalytics />
          </div>

          <div className="mt-4 pt-3 pt-lg-2">
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
}
