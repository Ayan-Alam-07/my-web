// import style from "./PayoutComm.module.css";
// import { useState } from "react";
// import { TbInfoOctagonFilled } from "react-icons/tb";
// import { CgInfo } from "react-icons/cg";
// import { RiSecurePaymentFill } from "react-icons/ri";
// import { FaUserLock } from "react-icons/fa";
// import { BsStopwatchFill } from "react-icons/bs";
// import { CgDetailsMore } from "react-icons/cg";
// import { useNavigate } from "react-router-dom";

// import upiLogo from "../../../assets/wallet/upi-logo.webp";
// import amazonLogo from "../../../assets/wallet/amazon-logo.webp";
// import googlePlayLogo from "../../../assets/wallet/googlePlay-logo.webp";
// import paypalLogo from "../../../assets/wallet/paypal-logo.webp";

// const PayoutInd = () => {
//   const navigate = useNavigate();

//   const handlePayout = () => {
//     const selectedOption = paymentOptionsAvail.find(
//       (option) => option.id === selectedId,
//     );

//     if (selectedOption) {
//       navigate(`/Payout?method=${selectedOption.name}`);
//     }
//   };

//   const [selectedId, setselectedId] = useState(null);
//   const handleLogoClick = (id) => {
//     setselectedId(id);
//   };

//   const paymentOptionsAvail = [
//     {
//       id: 1,
//       name: "upi",
//       logo: upiLogo,
//       alt: "Secure UPI withdrawal to transfer directly to bank account for instant India rewards payout",
//       class: "paymentLogoUpi",
//     },
//     {
//       id: 2,
//       name: "amazon",
//       logo: amazonLogo,
//       alt: "Trusted Amazon Gift Card India withdrawal option for instant rewards redemption",
//       class: "paymentLogoAmazon",
//     },
//     {
//       id: 3,
//       name: "googlePlay",
//       logo: googlePlayLogo,
//       alt: "Secure Google Play withdrawal option for instant global rewards transfer",
//       class: "paymentLogoGPlay",
//     },
//   ];

//   const paymentOptionsUnavail = [
//     {
//       id: 1,
//       logo: paypalLogo,
//       alt: "Trusted PayPal India withdrawal option for instant rewards cashout payout",
//     },
//   ];

//   const infos = [
//     {
//       id: 1,
//       icon: <RiSecurePaymentFill className={style.securePayIcon} />,
//       text: "Secure & Trusted Payments.",
//     },
//     {
//       id: 2,
//       icon: <FaUserLock className={style.trustUserIcon} />,
//       text: "Trusted by 100,000+ users.",
//     },
//     {
//       id: 3,
//       icon: <BsStopwatchFill className={style.payTimeIcon} />,
//       text: "Payments processed within 24 hours.",
//     },
//     {
//       id: 4,
//       icon: <CgDetailsMore className={style.correctInfoIcon} />,
//       text: "Ensure all payment details are entered correctly. Otherwise the amount will be lost and we are not responsible for it.",
//     },
//   ];

//   return (
//     <div className="container-fluid">
//       <div className="container">
//         <p
//           className={`${style.selectPymtMode} ${selectedId && style.selectedMode}`}
//         >
//           {/* <span className="fw-bold"> */}
//           <TbInfoOctagonFilled
//             className="mt-1 mt-md-0"
//             style={{ color: "#e2e2e2" }}
//           />
//           {/* </span>{" "} */}
//           <span className="ms-2">
//             {selectedId === null
//               ? "please select the payment method to proceed."
//               : "please Scroll down for payout."}
//           </span>
//         </p>

//         <div className={`row ms-3 ms-sm-0 mb-3  mt-lg-2 ${style.lowDevices}`}>
//           {paymentOptionsAvail.map((availOption) => (
//             <div
//               key={availOption.id}
//               className="col-5 p-0 col-lg-2 mt-5 mt-lg-4  ms-md-5 "
//             >
//               <div
//                 onClick={() => handleLogoClick(availOption.id)}
//                 className={`${style.paymentLogoCont}  ${
//                   selectedId === availOption.id ? style.clicked : ""
//                 }`}
//               >
//                 <img
//                   className={`${style[availOption.class]} ${
//                     selectedId === availOption.id ? style.remMar : ""
//                   }`}
//                   src={availOption.logo}
//                   alt={availOption.alt}
//                 />
//               </div>
//             </div>
//           ))}
//           {paymentOptionsUnavail.map((option) => (
//             <div
//               key={option.id}
//               className="col-5 p-0 col-lg-2 mt-5 mt-lg-4 ms-md-5  ps-lg-0"
//             >
//               <div className={style.paymentOptionsCont}>
//                 <p className={style.unavialPara}>Unavailable</p>
//                 <img
//                   src={option.logo}
//                   alt={option.alt}
//                   className={style.paymentOptionsLogo}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="row mb-lg-5 align-items-center justify-content-center justify-content-lg-between align-items-lg-end p-0">
//           <div className="col-12 col-lg-8 p-0 mt-4">
//             <div className={style.infoBox}>
//               <p className="mb-3 mb-lg-1 pb-1">
//                 <CgInfo className={style.infoLogo} />
//                 Must Read :
//               </p>
//               <ul className={style.infoList}>
//                 {infos.map((info) => (
//                   <li key={info.id}>
//                     <span>{info.icon}</span> {info.text}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="col-5 col-md-4 col-lg-3">
//             <div className="d-flex justify-content-lg-center align-items-center mb-lg-5 pb-lg-5">
//               <button
//                 disabled={selectedId === null}
//                 className={style.paymentBtn}
//                 onClick={handlePayout}
//               >
//                 Payout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default PayoutInd;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaCheckCircle,
  FaInfoCircle,
  FaLock,
  FaArrowRight,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import { FaClock } from "react-icons/fa6";

import styles from "./PayoutComm.module.css";

// Import your actual logos
import upiLogo from "../../../assets/wallet/upi-logo.webp";
import amazonLogo from "../../../assets/wallet/amazon-logo.webp";
import googlePlayLogo from "../../../assets/wallet/googlePlay-logo.webp";
import paypalLogo from "../../../assets/wallet/paypal-logo.webp";

const PayoutInd = () => {
  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState(null);

  const handleLogoClick = (id) => {
    setSelectedId(id);
  };

  const paymentOptionsAvail = [
    {
      id: 1,
      name: "upi",
      logo: upiLogo,
    },
    {
      id: 2,
      name: "amazon",
      logo: amazonLogo,
    },
    {
      id: 3,
      name: "googlePlay",
      logo: googlePlayLogo,
    },
  ];

  const paymentOptionsUnavail = [
    {
      id: 4,
      name: "paypal",
      logo: paypalLogo,
    },
  ];

  const infos = [
    {
      id: 1,
      text: "Secure Payments",
      icon: <FaShieldAlt />,
    },
    {
      id: 2,
      text: "100,000+ Users",
      icon: <FaUsers />,
    },
    {
      id: 3,
      text: "24 Hour Processing",
      icon: <FaClock />,
    },
    {
      id: 4,
      text: "Verified Transactions",
      icon: <FaCheckCircle />,
    },
  ];

  const handlePayout = () => {
    const selectedOption = paymentOptionsAvail.find(
      (option) => option.id === selectedId,
    );

    if (selectedOption) {
      navigate(`/Payout?method=${selectedOption.name}`);
    }
  };

  const getMethodDetails = (method) => {
    switch (method) {
      case "upi":
        return {
          title: "UPI Transfer",
          desc: "Instant Bank Transfer",
          meta: "Processing within 24 hours",
          badge: "Instant",
        };

      case "amazon":
        return {
          title: "Amazon Pay",
          desc: "Gift Card Balance",
          meta: "Instant delivery",
          badge: "Popular",
        };

      case "googlePlay":
        return {
          title: "Google Play",
          desc: "App Store Credit",
          meta: "Global redemption",
          badge: "Fast",
        };

      default:
        return {};
    }
  };

  const selectedOption = paymentOptionsAvail.find(
    (item) => item.id === selectedId,
  );

  return (
    <div className={styles.appContainer}>
      {/* STATUS */}

      <div
        className={`${styles.statusBanner} ${
          selectedId ? styles.selectedBanner : styles.defaultBanner
        }`}
      >
        {selectedId ? (
          <>
            <FaCheckCircle />

            <span>
              <span style={{ textTransform: "uppercase" }}>
                {selectedOption?.name}
              </span>{" "}
              selected, Continue below.
            </span>
          </>
        ) : (
          <>
            <FaInfoCircle />

            <span>Select a withdrawal method to continue.</span>
          </>
        )}
      </div>

      {/* TITLE */}

      <div className={styles.pageHeader}>
        <h2>Withdraw Funds</h2>

        <p>Select your preferred withdrawal method</p>
      </div>

      {/* AVAILABLE METHODS */}
      <div className={styles.paymentGrid}>
        {paymentOptionsAvail.map((method) => {
          const details = getMethodDetails(method.name);

          return (
            <div
              key={method.id}
              onClick={() => handleLogoClick(method.id)}
              className={`${styles.methodCard} ${
                selectedId === method.id ? styles.selected : ""
              } ${selectedId !== method.id ? styles.methodCardUnSelected : ""}`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.logoArea}>
                  <img src={method.logo} alt={method.name} />
                </div>
              </div>

              <div className={styles.methodContent}>
                <h4>
                  {details.title}
                  <FaCheckCircle className={styles.checkIcon} />
                </h4>

                <p>{details.desc}</p>
              </div>

              <div className={styles.methodMeta}>
                <FaClock />

                <span>{details.meta}</span>
              </div>

              <span className={styles.methodBadge}>{details.badge}</span>
            </div>
          );
        })}

        {/* DISABLED */}

        {paymentOptionsUnavail.map((method) => (
          <div
            key={method.id}
            className={`${styles.methodCard} ${styles.disabled}`}
          >
            <div className={styles.cardHeader}>
              <div className={styles.logoArea}>
                <img src={method.logo} alt={method.name} />
              </div>

              <div className={styles.lockBadge}>
                <FaLock />
              </div>

              <FaCheckCircle className={styles.checkIcon} />
            </div>

            <div className={styles.methodContent}>
              <h4>PayPal</h4>

              <p>Coming Soon</p>
            </div>

            <div className={styles.methodMeta}>
              Currently unavailable in your region
            </div>
          </div>
        ))}
      </div>

      {/* TRUST */}

      <div className={styles.trustSection}>
        <div className={styles.trustHeader}>Security & Trust</div>

        <div className={styles.trustGrid}>
          {infos.map((item) => (
            <div key={item.id} className={styles.trustCard}>
              <div className={styles.trustIcon}>{item.icon}</div>

              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON */}

      <button
        className={styles.payoutBtn}
        disabled={!selectedId}
        onClick={handlePayout}
      >
        Continue Withdrawal
        <FaArrowRight size={18} className="mt-md-1" />
      </button>
    </div>
  );
};

export default PayoutInd;
