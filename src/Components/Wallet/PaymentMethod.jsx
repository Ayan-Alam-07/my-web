import style from "./PaymentMethod.module.css";
import { useState } from "react";
import upiLogo from "../../assets/upi-logo-2.png";
import amazonLogo from "../../assets/amazon-logo.png";
import googlePlayLogo from "../../assets/googlePlay-logo.png";
import paypalLogo from "../../assets/paypal-logo.png";
import { TbInfoOctagonFilled } from "react-icons/tb";

const PaymentMethod = () => {
  const [clicked, setClicked] = useState(false);
  const handleLogoClick = () => {
    setClicked(!clicked);
  };

  const paymentOptions = [
    { id: 1, logo: amazonLogo },
    { id: 2, logo: googlePlayLogo },
    { id: 3, logo: paypalLogo },
  ];

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row ">
          <div className="col-12 p-0">
            <div className="mt-4 pt-3 pt-lg-0 mt-lg-0">
              <p className={style.tabsPara}>Payment Methods :</p>
            </div>
          </div>
        </div>
        {!clicked ? (
          <p className={style.selectPymtMode}>
            <span className="fw-bold">
              <TbInfoOctagonFilled />
            </span>{" "}
            please select the payment method to proceed.
          </p>
        ) : (
          ""
        )}
        <div className={`row ms-3 ms-sm-0 mb-3  mt-lg-2 ${style.lowDevices}`}>
          <div className="col-5 p-0 col-lg-2 mt-5 mt-lg-4  ms-md-5 ps-md-5">
            <div
              onClick={handleLogoClick}
              className={`${style.paymentLogoCont}  ${
                clicked ? style.clicked : ""
              }`}
            >
              <img
                className={`${style.paymentLogo} ${
                  clicked ? style.remMar : ""
                }`}
                src={upiLogo}
                alt="UPI"
              />
            </div>
          </div>
          {paymentOptions.map((option) => (
            <div
              key={option.id}
              className="col-5 p-0 col-lg-2 mt-5 mt-lg-4 ms-md-5 ps-md-5 ps-lg-0"
            >
              <div className={style.paymentOptionsCont}>
                <p className={style.unavialPara}>Unavailable</p>
                <img
                  src={option.logo}
                  alt="logo"
                  className={style.paymentOptionsLogo}
                />
              </div>
            </div>
          ))}
          <div className="row justify-content-center align-items-center">
            <div className="col-4">
              <div className="d-flex justify-content-center">
                <button disabled={!clicked} className={style.paymentBtn}>
                  Payout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentMethod;
