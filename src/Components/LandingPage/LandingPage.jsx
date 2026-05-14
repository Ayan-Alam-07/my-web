import { useState, useEffect } from "react";
import Loader from "../Loader/Loader"; // path to your loader component

import LandingHero from "./LandingHero";
import LandingNav from "./LandingNav";
import LandingEarnAbout from "./LandingEarnAbout";
import LandingHowWork from "./LandingHowWork";
import LandingVision from "./LandingVision";
import LandingAboutVELoop from "./LandingAboutVELoop";
import LandingFooter from "./LandingFooter";

const LandingPage = () => {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Main content */}
      <LandingNav />
      <LandingHero />
      <LandingEarnAbout />
      <LandingHowWork />
      <LandingVision />
      <LandingAboutVELoop />
      <LandingFooter />

      {/* Loader overlay */}
      {showLoader && <Loader />}
    </div>
  );
};

export default LandingPage;
