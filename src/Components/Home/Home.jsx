import HomeNav from "./HomeNav";
import HomeHero from "./HomeHero";
import HomeEarn from "./HomeEarn";
import { useLocation } from "react-router-dom";
import { useList } from "../../Context/ContextStore";
import { useEffect } from "react";

const Home = () => {
  const location = useLocation();
  const { user, fetchCoins } = useList();

  useEffect(() => {
    if (user?.token) {
      fetchCoins(false);
    }
  }, [location.pathname]);

  return (
    <>
      <HomeNav></HomeNav>
      <HomeHero></HomeHero>
      <HomeEarn></HomeEarn>
    </>
  );
};
export default Home;
