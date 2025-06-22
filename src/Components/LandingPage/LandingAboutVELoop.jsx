import style from "./LandingAboutVELoop.module.css";
import aboutVETaskImg from "../../assets/about-ve-task.png";
import aboutVEMakeMnyImg from "../../assets/about-ve-make-money.png";
import aboutVEPaidInstantImg from "../../assets/about-ve-paid-instant.png";
import aboutVESupportImg from "../../assets/about-ve-custumer-support.png";

const LandingAboutVELoop = () => {
  const AboutSect = [
    {
      id: 1,
      img: aboutVETaskImg,
      title: "Thousands of tasks for everyone",
      para: "Whether you're a student, stay-at-home parent, or freelancer, VELoop offers the easiest and most rewarding ways to make money online. With thousands of no-skill microtasks like surveys, games, app testing, and 3-minute challenges, you can turn spare time into real cash from anywhere, anytime. Trusted by users worldwide, VELoop makes online earning simple, fun, and flexible. Join VELoop today and start earning instantly.",
    },
    {
      id: 2,
      img: aboutVEMakeMnyImg,
      title: "Make money online anytime, anywhere",
      para: "No matter where you are, VELoop makes it easy to earn money online from home or on the go. Whether you're commuting, on a break, or relaxing at home, you can complete simple microtasks and earn extra income anytime. If you're searching for how to make money from home, VELoop offers flexible, no-skill earning opportunities for everyone — fast, fun, and secure.",
    },
    {
      id: 3,
      img: aboutVEPaidInstantImg,
      title: "Get paid instantly and easily",
      para: "With VELoop, your earnings are instantly available after completing a task and can be quickly transferred to your crypto wallet. Getting paid is fast, secure, and hassle-free. If you're searching for the best ways to make money online, VELoop ensures your rewards are processed and delivered without delays — making it one of the fastest and most trusted platforms to earn real crypto online.",
    },
    {
      id: 4,
      img: aboutVESupportImg,
      title: "24/7 support",
      para: "VELoop provides fast, reliable support whenever you need it. Our dedicated team is available 24/7 to assist you, and our active global community is always ready to help with advice and answers. Whether you're new to online earning or looking for the best ways to make money online, VELoop’s platform and community are here to guide you every step of the way.",
    },
  ];
  return (
    <>
      <div
        className="container-fluid pb-5"
        style={{ backgroundColor: "#fff", color: "#000" }}
      >
        <div className="row">
          <div className="col-12 px-lg-5 mt-lg-3">
            <h2 className={style.AboutHds}>
              Why Choose <span>VE</span>Loop?
            </h2>
            <p className={style.AboutPara}>
              VELoop is a trusted rewards platform empowering millions globally
              to earn money online effortlessly, securely, and daily through
              simple tasks and exciting offers.
            </p>
          </div>
        </div>
        <div className={style.largerNoBdr}></div>

        {AboutSect.map((section, index) => (
          <div
            key={section.id}
            className="row align-items-center justify-content-center mx-sm-4 mx-lg-0 py-5"
          >
            {/* TEXT: Always order-0 on mobile; alternate on desktop */}
            <div
              className={`col-12 col-lg-6 pb-5 pb-lg-0 px-4 px-lg-5 ${
                index % 2 === 0 ? "order-0 order-lg-1" : "order-0 order-lg-0"
              }`}
            >
              <h3 className={style.aboutCommHds}>{section.title}</h3>
              <p className={style.aboutCommPara}>{section.para}</p>
            </div>

            {/* IMAGE: Always order-1 on mobile; alternate on desktop */}
            <div
              className={`col-12 col-lg-6 px-4 px-lg-5 text-center ${
                index % 2 === 0 ? "order-1 order-lg-0" : "order-1 order-lg-1"
              }`}
            >
              <img
                src={section.img}
                alt={section.title}
                loading="lazy"
                className={style.aboutImg}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={style.ErnMnyFrmDevic}>
        <h2 className={style.aboutCommHds}>
          Earn money online from all your devices
        </h2>
        <p className={`m-0 ${style.aboutCommPara}`}>
          VELoop makes it easy to earn online using any device — smartphone,
          tablet, or computer. Whether you're relaxing at home or on the move,
          you can complete quick tasks anytime, anywhere. From surveys to games,
          VELoop works seamlessly across all devices, giving you flexible,
          no-skill ways to earn real rewards. If you're searching for how to
          make money from home or while traveling, VELoop is your trusted
          solution for secure, accessible, and daily online income.
        </p>
      </div>
    </>
  );
};
export default LandingAboutVELoop;
