import style from "./LandingFooter.module.css";
import LandingCommonBtn from "./LandingCommon/LandingCommonBtn";
import storeImg from "../../assets/footer-soon.png";

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
            {/* App Promo Section */}
            <div className="col-12 col-lg-3  mt-2 mb-5 my-lg-0 ">
              <h3 className={style.soonAppHds}>Get Soon The App</h3>
              <img
                src={storeImg}
                alt="download veloop from app store or play store"
                loading="lazy"
              />
            </div>

            {/* Earn/Business/Company Links */}
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
      </footer>
    </>
  );
};
export default LandingFooter;
