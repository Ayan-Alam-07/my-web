import HomeNav from "./HomeNav";
import HomeHero from "./HomeHero";
import HomeEarn from "./HomeEarn";
import { useLocation } from "react-router-dom";
import { useList } from "../../Context/ContextStore";
import { useEffect } from "react";
import SecFooter from "../CommonComponents/SecFooter";

const Home = () => {
  const location = useLocation();
  const { user, fetchCoins, fetchData } = useList();

  useEffect(() => {
    if (user?.token) {
      fetchCoins(false);
      fetchData();
    }
  }, [location.pathname]);

  return (
    <>
      <HomeNav></HomeNav>
      <HomeHero></HomeHero>
      <HomeEarn></HomeEarn>
      <SecFooter
        mt={0}
        mb={30}
        name={"Rewards Policies"}
        link={"/help-center"}
      />
    </>
  );
};
export default Home;
