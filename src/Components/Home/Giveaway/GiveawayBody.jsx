import style from "./GiveawayBody.module.css";
import givImg from "../../../assets/giveaway/images/giveaway-img-4.png";
import liveBadge from "../../../assets/badges/live-badge.gif";
import followYou from "../../../assets/follow/gif/youtube/youtube-1.gif";
import followInsta from "../../../assets/follow/gif/instagram/instagram-2.gif";
import followTele1 from "../../../assets/follow/gif/telegram/telegram-1.gif";
import followTele2 from "../../../assets/follow/gif/telegram/telegram-2.gif";

const GiveawayBody = () => {
  const followList = [
    {
      id: 1,
      name: "Youtube ...",
      nameClass: "youtube",
      link: "https://youtube.com/@veloopwatchearn",
      logo: followYou,
      altTag:
        "YouTube giveaway code – watch our channel video to claim rewards",
    },
    {
      id: 2,
      name: "Instagram ..",
      nameClass: "instagram",
      link: "",
      logo: followInsta,
      altTag:
        "Instagram giveaway code – copy from profile, paste to earn rewards",
    },
    {
      id: 3,
      name: "Telegram 1.",
      nameClass: "telegram",
      link: "https://t.me/+k_cUrmYv1r45ZDBl",
      logo: followTele1,
      altTag: "Telegram giveaway code – paste to earn rewards",
    },
    {
      id: 4,
      name: "Telegram 2.",
      nameClass: "telegram",
      link: "https://t.me/+k_cUrmYv1r45ZDBl",
      logo: followTele2,
      altTag:
        "Get the giveaway code from our Telegram handle and paste it here for rewards",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="container">
        <h3 className={style.givHds}>
          Enter <span style={{ color: "#ffd700" }}>Giveaway</span>{" "}
          <span style={{ color: "#22D3EE" }}>Code</span>
        </h3>

        <div className="d-flex justify-content-center align-items-center flex-column">
          <div style={{ position: "relative" }}>
            <img
              src={liveBadge}
              className={style.liveBadge}
              alt="Giveaway live badge – giveaway is active now"
            />
            <div className={style.liveBadgeBack}></div>
            <div className={style.givImgCont}>
              <img
                loading="lazy"
                src={givImg}
                alt="Giveaway code entry – enter your code here to claim rewards"
                className={style.givImg}
              />
            </div>
          </div>
          <div className={style.inpBtnCont}>
            <div className={style.inputContainer}>
              <input
                type="text"
                name="giveawayCode"
                id="giveawayCode"
                placeholder=" "
                required
              />
              <label htmlFor="giveawayCode">Giveaway Code</label>
            </div>
            <div className="d-flex justify-content-center">
              <button className={style.claimBtn}>Claim Now</button>
            </div>
          </div>
        </div>
        <div className={style.followSuperCont}>
          <p className={style.getCodePara}>Get Code On:</p>
          <div className={`row ${style.followCont}`}>
            {followList.map((obj) => (
              <div
                key={obj.id}
                className="d-flex justify-content-center mb-5 pb-4 mb-sm-0 pb-sm-0 col-6 col-md-3"
              >
                <div
                  className={`${style.followImgCont} ${
                    obj.id == 3 ? style.followNonComm : ""
                  }`}
                >
                  <div
                    onClick={() =>
                      window.open(obj.link, "_blank", "noopener,noreferrer")
                    }
                  >
                    <img
                      loading="lazy"
                      src={obj.logo}
                      alt={obj.altTag}
                      className={style.followCommImg}
                    />
                    <p
                      className={`${style.objNamePara} ${style[obj.nameClass]}`}
                    >
                      {obj.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GiveawayBody;
