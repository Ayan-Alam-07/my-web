import StakingHero from "../components/StakingHero/StakingHero";
import CommonNavArr from "../../CommonComponents/CommonNavArr";
import styles from "./StakingPage.module.css";

const StakingPage = () => {
  return (
    <main className={styles.main}>
      <CommonNavArr id={25} navigation={"/home"} />
      <StakingHero />
    </main>
  );
};
export default StakingPage;
