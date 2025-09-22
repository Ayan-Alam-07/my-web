import style from "./LandingFooter.module.css";
import { FaRegCopyright } from "react-icons/fa6";
import LandingCommonBtn from "./LandingCommon/LandingCommonBtn";

import storeImg from "../../assets/landing/landing-footer/footer-soon.webp";
import xImg from "../../assets/landing/landing-footer/footer-x.webp";
import facebookImg from "../../assets/landing/landing-footer/footer-facebook.webp";
import instaImg from "../../assets/landing/landing-footer/footer-insta.webp";
import telegramImg from "../../assets/landing/landing-footer/footer-telegram.webp";
import youtubeImg from "../../assets/landing/landing-footer/footer-youtube.webp";

const LandingFooter = () => {
  const earnMny = [
    {
      title: "EARN MONEY",
      options: [
        "Watch Videos",
        "Take Surveys",
        "Play Games",
        "Fill Captcha",
        "Social Tasks",
      ],
    },
    { title: "For Business", options: "business@veloop.com" },
    {
      title: "Company",
      options: ["About Us", "Terms of Service", "Privacy Policy"],
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
          <div className="row ">
            <div className="col-12 col-lg-3  mt-2 mb-5 my-lg-0 ">
              <h3 className={style.soonAppHds}>Get Soon The App</h3>
              <img
                src={storeImg}
                alt="download veloop from app store or play store"
                loading="lazy"
              />
            </div>

            {earnMny.map((section, index) => (
              <div key={index} className="col-6 col-sm-4 col-lg-3  ">
                <h3
                  className={`${style.footerSecHds} ${
                    index === 2 ? style.footerSecHdsMob : ""
                  }`}
                >
                  {section.title}
                </h3>
                <ul className={style.footerListCont}>
                  {typeof section.options === "string" ? (
                    <li>{section.options}</li>
                  ) : (
                    section.options.map((item, idx) => (
                      <li key={idx}>
                        {typeof item === "string" ? item : item.para}
                      </li>
                    ))
                  )}
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
