import { useNavigate } from "react-router-dom";
import LandingHero from "./LandingHero";
import LandingNav from "./LandingNav";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <LandingNav></LandingNav>
      <LandingHero></LandingHero>
      <div className="div">
        <button onClick={() => navigate("/Home")}>Get Started</button>
      </div>
    </>
  );
};

export default LandingPage;
