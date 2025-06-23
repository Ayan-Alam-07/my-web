import LandingHero from "./LandingHero";
import LandingNav from "./LandingNav";
import LandingEarnAbout from "./LandingEarnAbout";
import LandingHowWork from "./LandingHowWork";
import LandingVision from "./LandingVision";
import LandingAboutVELoop from "./LandingAboutVELoop";
import LandingFooter from "./LandingFooter";

const LandingPage = () => {
  return (
    <>
      <LandingNav />
      <LandingHero />
      <LandingEarnAbout />
      <LandingHowWork />
      <LandingVision />
      <LandingAboutVELoop />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
