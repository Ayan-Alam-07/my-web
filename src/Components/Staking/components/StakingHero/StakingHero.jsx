import styles from "./StakingHero.module.css";

import HeroBackground from "./HeroBackground/HeroBackground";
import TopBar from "./TopBar/TopBar";
import BalanceCard from "./BalanceCard/BalanceCard";
import ActionButtons from "./ActionButtons/ActionButtons";
import DailyEarningCard from "./DailyEarningCard/DailyEarningCard";
import BottomNavigation from "./BottomNavigation/BottomNavigation";

import { heroMockData } from "./mock/heroMockData";

export default function StakingHero() {
  return (
    <div className="container-fluid pt-4 px-0">
      <div className="container px-2">
        <section className={styles.heroSection}>
          <HeroBackground />

          <TopBar
            mission={heroMockData.activeMission}
            notificationCount={heroMockData.notificationCount}
          />

          <div className={styles.heroContent}>
            <BalanceCard
              balance={heroMockData.totalStakeBalance}
              growth={heroMockData.todayGrowthPercent}
              todayProfit={heroMockData.todayProfit}
              secondRate={heroMockData.profitPerSecond}
            />

            <ActionButtons />

            <DailyEarningCard
              todayProfit={heroMockData.todayProfit}
              history={heroMockData.hourlyHistory}
            />

            {/* <PortfolioOverview portfolios={portfolios} /> */}
          </div>
        </section>
      </div>
      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
