import { useNavigate } from "react-router-dom";
import styles from "./PortfolioHeader.module.css";
import { ChevronLeft, CircleHelp } from "lucide-react";

const PortfolioHeader = ({ navigation, onHelp }) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <button
        className={styles.backButton}
        onClick={() => navigate(navigation)}
        aria-label="Go Back"
      >
        <ChevronLeft size={34} strokeWidth={2.4} />
      </button>

      <div className={styles.center}>
        <h1>My Portfolio</h1>
        <p>Manage your active staking portfolios.</p>
      </div>

      <button className={styles.helpButton} onClick={onHelp} aria-label="Help">
        <CircleHelp size={22} strokeWidth={2.2} />
        <span>Help</span>
      </button>
    </header>
  );
};

export default PortfolioHeader;
