import style from "./LandingNav.module.css";
import VeLoopLogoAni from "../../assets/Animation-VELoop.gif";
import { useNavigate } from "react-router-dom";

const LandingNav = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className={`container-fluid p-0 ${style.landingNav}`}>
      <div>
        <nav>
          <div
            className={`container d-flex align-items-center justify-content-between ${style.landingNavBlur}`}
          >
            <div className="d-flex align-items-center ">
              <div className={style.VeLoopLogo}>
                <img
                  loading="lazy"
                  src={VeLoopLogoAni}
                  alt="Watch Ads & Earn Real Cash Online – Only on VELoop"
                  onClick={() => window.location.reload()}
                />
              </div>
              <h2 className={style.landingLogoTxt}>
                <span style={{ color: "#ffd700", marginRight: "3px" }}>VE</span>
                Loop
              </h2>
            </div>
            <div>
              {!user ? (
                <button className={style.landingLoginBtn} onClick={handleLogin}>
                  Login / Signup
                </button>
              ) : (
                <button
                  className={style.landingLoginBtn}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default LandingNav;
