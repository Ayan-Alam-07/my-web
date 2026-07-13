import StakingHero from "../components/StakingHero/StakingHero";
import CommonNavArr from "../../CommonComponents/CommonNavArr";

const StakingPage = () => {
  return (
    <>
      <CommonNavArr id={25} navigation={"/home"} />
      <StakingHero />
    </>
  );
};
export default StakingPage;
