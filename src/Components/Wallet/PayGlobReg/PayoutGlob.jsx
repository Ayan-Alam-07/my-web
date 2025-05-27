import style from "../PayMethReg/PayoutComm.module.css";
import { useState } from "react";
import usdtLogo from "../../../assets/usdt-logo.png";
import btcLogo from "../../../assets/btc-logo.png";
import amazonLogo from "../../../assets/amazon-logo.png";
import paypalLogo from "../../../assets/paypal-logo.png";
import { TbInfoOctagonFilled } from "react-icons/tb";
import { CgInfo } from "react-icons/cg";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaUserLock } from "react-icons/fa";
import { BsStopwatchFill } from "react-icons/bs";
import { CgDetailsMore } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const PayoutGlob = () => {
  const navigate = useNavigate();

  const handlePayout = () => {
    const selectedOption = paymentOptionsAvail.find(
      (option) => option.id === selectedId
    );

    if (selectedOption) {
      navigate(`/Payout?method=${selectedOption.name}`);
    }
  };

  const [selectedId, setselectedId] = useState(null);
  const handleLogoClick = (id) => {
    setselectedId(id);
  };

  const paymentOptionsAvail = [
    {
      id: 1,
      name: "paypal",
      logo: paypalLogo,
      class: "paymentLogoPaypal",
      paraClass: "",
    },
    {
      id: 2,
      name: "amazon",
      logo: amazonLogo,
      class: "paymentLogoAmazon",
      paraClass: "",
    },
    {
      id: 3,
      name: "usdt",
      logo: usdtLogo,
      class: "paymentLogoGPlay",
      paraClass: "usdtPara",
    },
    {
      id: 4,
      name: "btc",
      logo: btcLogo,
      class: "paymentLogoPaypal",
      paraClass: "btcPara",
    },
  ];

  const infos = [
    {
      id: 1,
      icon: <RiSecurePaymentFill className={style.securePayIcon} />,
      text: "Secure & Trusted Payments.",
    },
    {
      id: 2,
      icon: <FaUserLock className={style.trustUserIcon} />,
      text: "Trusted by 100,000+ users.",
    },
    {
      id: 3,
      icon: <BsStopwatchFill className={style.payTimeIcon} />,
      text: "Payments processed within 24 hours.",
    },
    {
      id: 4,
      icon: <CgDetailsMore className={style.correctInfoIcon} />,
      text: "Ensure all payment details are entered correctly. If amount lost we are not responsible for it.",
    },
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
        {selectedId === null ? (
          <p className={style.selectPymtMode}>
            <span className="fw-bold">
              <TbInfoOctagonFilled />
            </span>{" "}
            please select the payment method to proceed.
          </p>
        ) : (
          <p className={style.scrollPayout}>
            <span className="fw-bold">
              <TbInfoOctagonFilled className="me-2" />
            </span>{" "}
            please Scroll down for payout.
          </p>
        )}
        <div className={`row ms-3 ms-sm-0 mb-3  mt-lg-2 ${style.lowDevices}`}>
          {paymentOptionsAvail.map((availOption) => (
            <div
              key={availOption.id}
              className="col-5 p-0 col-lg-2 mt-5 mt-lg-4  ms-md-5 "
            >
              <div
                onClick={() => handleLogoClick(availOption.id)}
                className={`${style.paymentLogoCont}  ${
                  selectedId === availOption.id ? style.clicked : ""
                }`}
              >
                <img
                  className={`${style[availOption.class]} ${
                    selectedId === availOption.id ? style.remMar : ""
                  }`}
                  src={availOption.logo}
                  alt="UPI"
                />
              </div>
              <div>
                <p
                  className={`${style.payOptName} ${
                    style[availOption.paraClass]
                  }  ${selectedId === availOption.id ? style.activeName : ""}`}
                >
                  {availOption.name.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="row mb-lg-5 align-items-center justify-content-center justify-content-lg-between align-items-lg-end p-0">
          <div className="col-12 col-lg-8 p-0 mt-4">
            <div className={style.infoBox}>
              <p className="mb-3 mb-lg-1 pb-1">
                <CgInfo className={style.infoLogo} />
                Must Read :
              </p>
              <ul className={style.infoList}>
                {infos.map((info) => (
                  <li key={info.id}>
                    <span>{info.icon}</span> {info.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-5 col-md-4 col-lg-3">
            <div className="d-flex justify-content-lg-center align-items-center mb-lg-5 pb-lg-5">
              <button
                disabled={selectedId === null}
                className={style.paymentBtn}
                onClick={handlePayout}
              >
                Payout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PayoutGlob;
