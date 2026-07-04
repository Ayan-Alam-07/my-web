import "./AppLayout.css"; //apply App.css in the jackpot sections!!
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/Home";
import Wallet from "./Components/Wallet/Wallet";
import Payout from "./Components/Wallet/Payout/Payout";
import Task from "./Components/Home/Task/Task";
import Giveaway from "./Components/Home/Giveaway/Giveaway";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import TaskOptionChecker from "./Components/Home/Task/TaskOptionChecker";
import ExchangeCenter from "./Components/Home/ExchangeCenter/ExchangeCenter";
import Bonus from "./Components/Home/Bonus/Bonus";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import PublicOnlyRoute from "./Components/PublicOnlyRoute/PublicOnlyRoute";
import Loader from "./Components/Loader/Loader";
import { useList } from "./Context/ContextStore";
import Referral from "./Components/Reffer/Reffer";
import ReferralHistory from "./ReferralHistory/ReferralHistory";
import WatchAd from "./Components/WatchAD/WatchAd";
import DailyBonus from "./Components/DailyBonus/DailyBonus";
import TapTokenExc from "./Components/TapNEarn/TapTokenExc";
import AdminRoute from "../src/Components/AdminRoute/AdminRoute";
import AdminDashboard from "../src/Components/Admin/AdminDashboard";
import Transactions from "./Components/Transaction/Transactions";
import DailyCheckIn from "./RewardSections/DailyCheckIn/DailyCheckIn";
import SpinWheel from "./RewardSections/SpinWheel/SpinWheel";
import LvlDashboard from "./RewardSections/LevelXP/pages/LvlDashboard";
import LeaderboardPage from "./RewardSections/Leaderboard/pages/LeaderboardPage";
import TapEarn from "./Components/TapNEarn/pages/TapEarn";
import CustomerServicePage from "./Components/Support/Pages/CustomerServicePage";
import MasterLegalPage from "./Legal/MasterLegalPage";
import AboutUsPage from "./Legal/About/AboutUsPage";
import AdvertisingOfferwallPolicyPage from "./Legal/Advertising/AdvertisingOfferwallPolicyPage";
import FutureFeaturesNoticePage from "./Legal/FutureNotice/FutureFeaturesNoticePage";
import SecurityPlatformProtectionPage from "./Legal/SecurityProtection/SecurityPlatformProtectionPage";
import LegalNoticePage from "./Legal/NoticePage/LegalNoticePage";
import WithdrawalRewardVerificationPolicyPage from "./Legal/WithdrawalPolicy/WithdrawalRewardVerificationPolicyPage";
import PlatformCurrencyPolicyPage from "./Legal/CurrencyPolicy/PlatformCurrencyPolicyPage";
import ContactCompliancePage from "./Legal/ContactCompliance/ContactCompliancePage";
import EarningsDisclaimerPage from "./Legal/EarningDisclaimer/EarningsDisclaimerPage";
import CommunityRulesPage from "./Legal/CommunityRules/CommunityRulesPage";
import AntiFraudPolicyPage from "./Legal/AntiFraud/AntiFraudPolicyPage";
import RefundCancellationPage from "./Legal/RefundCancellation/RefundCancellationPage";
import DisclaimerPage from "./Legal/Disclaimer/DisclaimerPage";
import PrivacyPolicyPage from "./Legal/PrivacyPolicy/PrivacyPolicyPage";
import TermsConditionsPage from "./Legal/TermsConditions/TermsConditionsPage";
import DmcaCopyrightPolicyPage from "./Legal/DmcaPolicy/DmcaCopyrightPolicyPage";
import RewardPolicy from "./RewardsPolicies/RewardPolicy";
import WatchAdsPage from "./RewardsPolicies/WatchAdPolicy/WatchAdsPage";
import DailyCheckInPage from "./RewardsPolicies/DailyCheckInPolicy/DailyCheckInPage";
import MiningPage from "./RewardsPolicies/MiningPolicy/MiningPage";
import SpinTheWheelPage from "./RewardsPolicies/SpinTheWheelPolicy/SpinTheWheelPage";
import SocialFollowRewardsPage from "./RewardsPolicies/SocialFollowRewardsPolicy/SocialFollowRewardsPage";
import LeaderboardRewardsPage from "./RewardsPolicies/LeaderboardRewardsPolicy/LeaderboardRewardsPage";
import TapAndEarnPage from "./RewardsPolicies/TapAndEarnPolicy/TapAndEarnPage";
import SolveCaptchaPage from "./RewardsPolicies/SolveCaptchaPolicy/SolveCaptchaPage";
import ReferAndEarnPage from "./RewardsPolicies/ReferAndEarnPolicy/ReferAndEarnPage";
import LevelSystemPage from "./RewardsPolicies/LevelSystemPolicy/LevelSystemPage";
import GemsExchangeCenterPage from "./RewardsPolicies/GemsExchangeCenterPolicy/GemsExchangeCenterPage";
import WatchAdBonusesPage from "./RewardsPolicies/WatchAdBonusesPolicy/WatchAdBonusesPage";
import PromoCodesPage from "./RewardsPolicies/PromoCodesPolicy/PromoCodesPage";
import TeamBattlePage from "./RewardsPolicies/TeamBattlePolicy/TeamBattlePage";
import ReferralMilestonesPage from "./RewardsPolicies/ReferralMilestonesPolicy/ReferralMilestonesPage";
import LuckyDrawPage from "./RewardsPolicies/LuckyDrawPolicy/LuckyDrawPage";
import CollectCardsPage from "./RewardsPolicies/CollectCardsPolicy/CollectCardsPage";
import SurpriseRewardsPage from "./RewardsPolicies/SurpriseRewardsPolicy/SurpriseRewardsPage";
import MysteryRewardsPage from "./RewardsPolicies/MysteryRewardsPolicy/MysteryRewardsPage";
import WhatIsVELOOPRewardsPage from "./RewardsPolicies/WhatIsVELOOPRewardsPolicy/WhatIsVELOOPRewardsPage";
import PlatformCurrenciesPage from "./RewardsPolicies/PlatformCurrenciesPolicy/PlatformCurrenciesPage";
// import JoinMembershipPage from "./RewardsPolicies/JoinMembershipPolicy/JoinMembershipPage";
import StreakRewardsPage from "./RewardsPolicies/StreakRewardsPolicy/StreakRewardsPage";
import MissionsAndBadgesPage from "./RewardsPolicies/MissionsAndBadgesPolicy/MissionsAndBadgesPage";
import WalletOverviewPage from "./RewardsPolicies/WalletOverviewPolicy/WalletOverviewPage";
import SwapCenterPage from "./RewardsPolicies/SwapCenterPolicy/SwapCenterPage";
import HowWithdrawalsWorkPage from "./RewardsPolicies/HowWithdrawalsWorkPolicy/HowWithdrawalsWorkPage";
import RewardVerificationPage from "./RewardsPolicies/RewardVerificationPolicy/RewardVerificationPage";
import MultipleAccountsAndVPNPage from "./RewardsPolicies/MultipleAccountsAndVPNPolicy/MultipleAccountsAndVPNPage";
import BotEmulatorAutoclickerRulesPage from "./RewardsPolicies/BotEmulatorAutoclickerRulesPolicy/BotEmulatorAutoclickerRulesPage";
import WeeklyLeaderboardEntry from "./RewardsPolicies/JoinMembershipPolicy/WeeklyLeaderboardEntry";
import UserProfile from "./Components/Profile/UserProfile";
import ContributionVault from "./Components/Contribution/pages/ContributionVault";

const App = () => {
  const { isLoading } = useList();

  return (
    <>
      <ScrollToTop />
      {isLoading && <Loader />}

      <Routes>
        {/* always opens wheather its public or private */}
        <Route path="/" element={<LandingPage />}></Route>

        {/* Legal Docs */}
        <Route
          path="/customer-service"
          element={<CustomerServicePage />}
        ></Route>
        <Route path="/legal" element={<MasterLegalPage />}></Route>
        <Route path="/about-us" element={<AboutUsPage />}></Route>
        <Route
          path="/advertising-offerwall-policy"
          element={<AdvertisingOfferwallPolicyPage />}
        ></Route>
        <Route
          path="/future-features-notice"
          element={<FutureFeaturesNoticePage />}
        ></Route>
        <Route
          path="/security-platform-protection"
          element={<SecurityPlatformProtectionPage />}
        ></Route>
        <Route
          path="/withdrawal-verification-policy"
          element={<WithdrawalRewardVerificationPolicyPage />}
        ></Route>
        <Route
          path="/platform-currency-policy"
          element={<PlatformCurrencyPolicyPage />}
        ></Route>
        <Route
          path="/contact-compliance"
          element={<ContactCompliancePage />}
        ></Route>

        <Route
          path="/earnings-disclaimer"
          element={<EarningsDisclaimerPage />}
        ></Route>

        <Route path="/community-rules" element={<CommunityRulesPage />}></Route>

        <Route
          path="/anti-fraud-policy"
          element={<AntiFraudPolicyPage />}
        ></Route>

        <Route
          path="/refund-cancellation-policy"
          element={<RefundCancellationPage />}
        ></Route>

        <Route path="/disclaimer" element={<DisclaimerPage />}></Route>

        <Route path="/privacy-policy" element={<PrivacyPolicyPage />}></Route>

        <Route
          path="/terms-and-conditions"
          element={<TermsConditionsPage />}
        ></Route>

        <Route
          path="/dmca-copyright-policy"
          element={<DmcaCopyrightPolicyPage />}
        ></Route>

        <Route path="/legal-notice" element={<LegalNoticePage />}></Route>

        {/* Rewards Policies */}
        <Route
          path="/help-center/earning/watch-ads"
          element={<WatchAdsPage />}
        ></Route>
        <Route
          path="/help-center/earning/daily-rewards"
          element={<DailyCheckInPage />}
        ></Route>

        <Route path="/help-center" element={<RewardPolicy />}></Route>

        <Route
          path="/help-center/earning/mining-rewards"
          element={<MiningPage />}
        ></Route>

        <Route
          path="/help-center/earning/spin-the-wheel"
          element={<SpinTheWheelPage />}
        ></Route>

        <Route
          path="/help-center/earning/follow-and-earn"
          element={<SocialFollowRewardsPage />}
        ></Route>

        <Route
          path="/help-center/earning/leaderboard-rewards"
          element={<LeaderboardRewardsPage />}
        ></Route>

        <Route
          path="/help-center/earning/tap-and-earn"
          element={<TapAndEarnPage />}
        ></Route>

        <Route
          path="/help-center/earning/solve-captcha"
          element={<SolveCaptchaPage />}
        ></Route>

        <Route
          path="/help-center/safety/referral-rewards"
          element={<ReferAndEarnPage />}
        ></Route>

        <Route
          path="/help-center/earning/level-system"
          element={<LevelSystemPage />}
        ></Route>

        <Route
          path="/help-center/wallet/gems-exchange-center"
          element={<GemsExchangeCenterPage />}
        ></Route>

        <Route
          path="/help-center/earning/watch-ad-bonuses"
          element={<WatchAdBonusesPage />}
        ></Route>

        <Route
          path="/help-center/safety/promo-codes"
          element={<PromoCodesPage />}
        ></Route>

        <Route
          path="/help-center/future/team-battle"
          element={<TeamBattlePage />}
        ></Route>

        <Route
          path="/help-center/future/referral-milestones"
          element={<ReferralMilestonesPage />}
        ></Route>

        <Route
          path="/help-center/future/lucky-draw"
          element={<LuckyDrawPage />}
        ></Route>

        <Route
          path="/help-center/future/collect-cards"
          element={<CollectCardsPage />}
        ></Route>

        <Route
          path="/help-center/future/surprise-rewards"
          element={<SurpriseRewardsPage />}
        ></Route>

        <Route
          path="/help-center/future/mystery-rewards"
          element={<MysteryRewardsPage />}
        ></Route>

        <Route
          path="/help-center/getting-started/what-is-veloop-rewards"
          element={<WhatIsVELOOPRewardsPage />}
        ></Route>

        <Route
          path="/help-center/getting-started/platform-currencies"
          element={<PlatformCurrenciesPage />}
        ></Route>

        <Route
          path="/help-center/getting-started/weekly-leaderboard-entry"
          element={<WeeklyLeaderboardEntry />}
        ></Route>

        <Route
          path="/help-center/earning/streak-rewards"
          element={<StreakRewardsPage />}
        ></Route>

        <Route
          path="/help-center/earning/missions-and-badges"
          element={<MissionsAndBadgesPage />}
        ></Route>

        <Route
          path="/help-center/wallet/wallet-overview"
          element={<WalletOverviewPage />}
        ></Route>

        <Route
          path="/help-center/wallet/swap-center"
          element={<SwapCenterPage />}
        ></Route>

        <Route
          path="/help-center/withdrawals/how-withdrawals-work"
          element={<HowWithdrawalsWorkPage />}
        ></Route>

        <Route
          path="/help-center/withdrawals/reward-verification"
          element={<RewardVerificationPage />}
        ></Route>

        <Route
          path="/help-center/safety/multiple-accounts-and-vpn"
          element={<MultipleAccountsAndVPNPage />}
        ></Route>

        <Route
          path="/help-center/safety/bot-emulator-autoclicker-rules"
          element={<BotEmulatorAutoclickerRulesPage />}
        ></Route>

        {/* <Route path="/help-center" element={<RewardPolicy />}></Route> */}

        {/* public routes no login required */}
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <PublicOnlyRoute>
              <Register />
            </PublicOnlyRoute>
          }
        ></Route>
        <Route
          path="/forgot-password"
          element={
            <PublicOnlyRoute>
              <ForgotPassword />
            </PublicOnlyRoute>
          }
        />
        {/* ADMIN ROUTE */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        {/* private route login required */}
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/daily-bonus"
          element={
            <ProtectedRoute>
              <DailyBonus />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Wallet"
          element={
            <ProtectedRoute>
              <Wallet />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/withdrawal-history"
          element={
            <ProtectedRoute>
              <Transactions />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Payout"
          element={
            <ProtectedRoute>
              <Payout />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/contribution-vault"
          element={
            <ProtectedRoute>
              <ContributionVault />
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/captcha-tasks"
          element={
            <ProtectedRoute>
              <Task />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/giveaway-code"
          element={
            <ProtectedRoute>
              <Giveaway />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="taskOptionChecker"
          element={
            <ProtectedRoute>
              <TaskOptionChecker />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/exchange-center"
          element={
            <ProtectedRoute>
              <ExchangeCenter />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/watchAd-bonus"
          element={
            <ProtectedRoute>
              <Bonus />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Referral"
          element={
            <ProtectedRoute>
              <Referral />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/invite-history"
          element={
            <ProtectedRoute>
              <ReferralHistory />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/watch-Ads"
          element={
            <ProtectedRoute>
              <WatchAd />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/tap-n-earn"
          element={
            <ProtectedRoute>
              <TapEarn />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/tap-token"
          element={
            <ProtectedRoute>
              <TapTokenExc />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/daily-streak"
          element={
            <ProtectedRoute>
              <DailyCheckIn />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/spin-wheel"
          element={
            <ProtectedRoute>
              <SpinWheel />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/Lvl-Dashboard"
          element={
            <ProtectedRoute>
              <LvlDashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/leaderboard"
          element={
            <ProtectedRoute>
              <LeaderboardPage />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
export default App;
