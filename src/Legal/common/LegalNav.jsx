import { Link } from "react-router-dom";
import styles from "./LegalNav.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const LegalNav = () => {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navInner}`}>
        <div className={styles.brand}>VELoop Rewards</div>
        <div className={styles.navActions}>
          <Link to="/" className={styles.secondaryBtn}>
            <FaArrowLeft />
            <span className="d-flex">
              Back<span className="d-none d-lg-block ms-1"> to Home</span>
            </span>
          </Link>
          <Link to="/customer-service" className={styles.primaryBtn}>
            <TfiHeadphoneAlt size={20} /> Contact Support
          </Link>
        </div>
      </div>
    </header>
  );
};
export default LegalNav;
