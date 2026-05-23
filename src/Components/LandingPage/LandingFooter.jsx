import style from "./LandingFooter.module.css";
import { FaRegCopyright } from "react-icons/fa6";
import LandingCommonBtn from "./LandingCommon/LandingCommonBtn";

import storeImg from "../../assets/landing/landing-footer/footer-soon.webp";
import xImg from "../../assets/landing/landing-footer/footer-x.webp";
import facebookImg from "../../assets/landing/landing-footer/footer-facebook.webp";
import instaImg from "../../assets/landing/landing-footer/footer-insta.webp";
import telegramImg from "../../assets/landing/landing-footer/footer-telegram.webp";
import youtubeImg from "../../assets/landing/landing-footer/footer-youtube.webp";
import { useNavigate } from "react-router-dom";

const LandingFooter = () => {
  const navigate = useNavigate();

  const earnMny = [
    {
      title: "EARN MONEY",
      options: [
        { hds: "Watch Videos", link: "" },
        { hds: "Take Surveys", link: "" },
        { hds: "Play Games", link: "" },
        { hds: "Fill Captcha", link: "" },
        { hds: "Social Tasks", link: "" },
        { hds: "Rewards Policies", link: "/help-center" },
      ],
    },
    {
      title: "For Business",
      options: [{ hds: "business@veloop.com", link: "" }],
    },
    {
      title: "Company",
      options: [
        { hds: "About Us", link: "/about-us" },
        { hds: "Contact Us", link: "/customer-service" },
      ],
    },
    {
      title: "Legal",
      options: [
        { hds: "Terms & Conditions", link: "/terms-and-conditions" },
        { hds: "Privacy Policy", link: "/privacy-policy" },
        { hds: "Disclaimer", link: "/disclaimer" },
        { hds: "Refund & Cancellation", link: "/refund-cancellation-policy" },
        { hds: "Legal / Policies", link: "/legal" },
      ],
    },
  ];

  const socials = [
    {
      icon: xImg,
      href: "",
      alt: "Earn free global rewards on X (formerly Twitter) with our trusted rewards website",
    },
    {
      icon: facebookImg,
      href: "",
      alt: "Join our trusted global rewards website and earn free rewards on Facebook",
    },
    {
      icon: instaImg,
      href: "",
      alt: "Join our trusted global rewards site to earn free rewards on Instagram",
    },
    {
      icon: telegramImg,
      href: "https://t.me/+k_cUrmYv1r45ZDBl",
      alt: "Get free rewards globally on Telegram with our trusted rewards platform",
    },
    {
      icon: youtubeImg,
      href: "https://youtube.com/@veloopwatchearn",
      alt: "Earn rewards worldwide on YouTube with our trusted rewards website",
    },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#416ef0", textAlign: "center" }}>
        <div className="container-fluid">
          <div className={style.upperFooter}>
            <h2>Small tasks, real rewards</h2>
            <p>
              Earn money online by completing microtasks anytime and anywhere.
            </p>
            <div className="mt-4 pt-sm-3 pt-lg-0 mb-3 mb-lg-0 pt-lg-3">
              <LandingCommonBtn
                lndngClass={"lndngClass"}
                btnText={"Start Earning"}
              ></LandingCommonBtn>
            </div>
          </div>
        </div>
      </div>
      <footer className={style.footerCont}>
        <div className="container-fluid pt-5 px-lg-5">
          <div className="row justify-content-between justify-content-md-around justify-content-lg-between">
            <div className="col-12 col-lg-2  mt-2 mb-4 my-lg-0 ">
              <h3 className={style.soonAppHds}>Get Soon The App</h3>
              <img
                src={storeImg}
                alt="download veloop from app store or play store"
                loading="lazy"
              />
            </div>

            {earnMny.map((section, index) => (
              <div key={index} className="col-6 col-sm-5 col-lg-2  ">
                <h3 className={`${style.footerSecHds} `}>{section.title}</h3>
                <ul className={style.footerListCont}>
                  {section.options.map((item, idx) => (
                    <li key={idx}>
                      <span onClick={() => navigate(item.link)}>
                        {item.hds}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          className="row d-flex justify-content-between mt-5 pt-4"
          style={{ borderTop: "2px solid rgba(255,255,255,0.15)" }}
        >
          <div className={`col-12 col-sm-6 ${style.lowerFootDetail}`}>
            <FaRegCopyright /> 2025, VELoop. <span>Terms & Privacy policy</span>
          </div>
          <div className={`col-12 col-sm-6 ${style.lowerFootSocials}`}>
            {socials.map((social, idx) => (
              <a
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                href={social.href}
                className={style.lowerFootAnc}
              >
                {" "}
                <img loading="lazy" src={social.icon} alt={social.alt} />{" "}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};
export default LandingFooter;
