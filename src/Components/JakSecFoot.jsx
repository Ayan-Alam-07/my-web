import style from "./JakSecFoot.module.css";
import logo from "../assets/jk-logo.png";
import { FaCopyright } from "react-icons/fa";

const JakSecFooter = () => {
  return (
    <footer style={{ userSelect: "none" }}>
      <div className="container-fluid">
        <div className="container">
          <div
            className={`row  mt-lg-5 pt-lg-5 justify-content-around ${style.JakFooter}`}
          >
            <div
              className={`col-lg-2 col-md-6 col-12 mt-lg-0 mt-4 pt-lg-0 pt-3 ${style.serviceSec} `}
            >
              <h4>Services</h4>
              <ul>
                <li>
                  <p>Equipments</p>
                </li>
                <li>
                  <p>Fitness Tips</p>
                </li>
                <li>
                  <p>Diet Guide</p>
                </li>
                <li>
                  <p>Rest Guidence</p>
                </li>
              </ul>
            </div>
            <div
              className={`col-lg-3 col-md-6 col-12 mt-lg-0 mt-md-4 pt-lg-0 pt-md-3  ${style.companySec}`}
            >
              <h4>Company</h4>
              <ul>
                <h5>
                  Fitiex Consultancy PVT. LTD. <br />
                  <span className="d-block mt-2 pt-2 text-capitalize">
                    provides services guidence related <br /> to fitness and
                    gym.
                  </span>
                </h5>
              </ul>
            </div>
            <div className={`col-lg-3 col-md-6 col-12 ${style.supportSec}`}>
              <h4>Support</h4>
              <ul>
                <li>
                  <span className="fw-semibold">Phone:</span>
                  <p className="d-inline-block ps-2"> +91 764601XXX1</p>
                </li>
                <li>
                  <span className="fw-semibold">E-mail:</span>
                  <p className="d-inline-block ps-2"> support@fitiex.com</p>
                </li>
                <li className="mt-2 pt-2">
                  <a
                    href="#"
                    className="fs-5"
                    onClick={() => window.location.reload()}
                  >
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
            <div className={`col-lg-3 col-md-6 col-12 ${style.addressSec}`}>
              <h4>Address</h4>
              <ul>
                <h5>
                  Main Road Chitarpur, Near <br />{" "}
                  <strong>CHOTTI MASJID </strong>
                  Chitarpur, <br /> 825101, Ramgarh ( Jharkhand ), <br /> India
                </h5>
              </ul>
            </div>
          </div>
          <div className={style.seperator}></div>
          <div className="row text-center">
            <div className=" col-12 d-flex justify-content-center align-items-center ">
              <img
                src={logo}
                alt="Logo"
                className={style.jkFootLogo}
                onClick={() => window.location.reload()}
              />
              <h5 className="fs-4 ms-lg-4 ms-3" style={{ cursor: "text" }}>
                Fit
                <span className="fs-4" style={{ color: "#32CD32" }}>
                  iex
                </span>{" "}
                Consultancy
              </h5>
            </div>
            <div className={style.seperator}></div>
            <div className="col-12 mb-4 pb-2">
              <p className={style.footLower}>
                <span style={{ cursor: "pointer" }}>
                  All Right Reserved By <br /> Fitiex Consultancy <br />{" "}
                  Copyright
                  <FaCopyright className="ms-2" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default JakSecFooter;
