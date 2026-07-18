import styles from "./Portfolio.module.css";
import portfolioData from "./mock/portfolioMockData";

import PortfolioHeader from "./PortfolioHeader/PortfolioHeader";
import PortfolioOverview from "./PortfolioOverview/PortfolioOverview";

console.log(portfolioData);

const Portfolio = () => {
  return (
    <div className="container-fluid px-1 px-sm-2">
      <div className="container">
        <section className={styles.portfolio}>
          <PortfolioHeader navigation={"/staking"} />

          <PortfolioOverview overview={portfolioData.overview} />

          {/* <ActivePortfolio portfolio={portfolioData.activePortfolio} />

      <UnlockPortfolio unlock={portfolioData.unlock} />

      <Analytics analytics={portfolioData.analytics} /> */}
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
