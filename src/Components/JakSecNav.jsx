import style from "./JakSecNav.module.css";
import FitLogo from "../assets/jk-logo.png";

const JackNav = () => {
  return (
    <nav
      className={`navbar pt-0 mb-1 ${style.nav}`}
      style={{ position: "sticky", top: "0px", backgroundColor: "#fff" }}
    >
      <div className="container-fluid d-flex justify-content-start pt-2">
        <img
          src={FitLogo}
          alt="Logo"
          className={style.FitLogo}
          onClick={() => window.location.reload()}
        />
        <a className={`fs-3 ${style.NavTitle}`}>
          <p className="m-0 py-lg-0 py-2">
            Fit<span style={{ color: "#32CD32" }}>iex</span> Consultancy
          </p>
        </a>
      </div>
    </nav>
  );
};
export default JackNav;
