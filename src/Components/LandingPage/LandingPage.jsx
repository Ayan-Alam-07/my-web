import { useNavigate } from "react-router-dom";
import LandingHero from "./LandingHero";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <LandingHero></LandingHero>
      <div className="div">
        <button onClick={() => navigate("/Home")}>Get Started</button>
      </div>
    </>
  );
};

export default LandingPage;
