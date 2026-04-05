// import style from "./PayoutUpi.module.css";
// import googlePlayLogo from "../../../assets/wallet/googlePlay-logo.webp";
// import RedeemBase from "./AbstractRedeem/RedeemBase";

// const PayoutGPlay = ({ name }) => {
//   const vouchers = [
//     { id: 1, amount: 10, requiredCoins: 2600 },
//     { id: 2, amount: 25, requiredCoins: 6000 },
//     { id: 3, amount: 50, requiredCoins: 11000 },
//     { id: 4, amount: 100, requiredCoins: 20500 },
//     { id: 5, amount: 150, requiredCoins: 30000 },
//   ];

//   return (
//     <RedeemBase
//       vouchers={vouchers}
//       logo={googlePlayLogo}
//       logoClass={style.gPlayLogo}
//       fillClass={style.fillAmazon}
//       selectedClass={style.selectedAmzGpl}
//       style={style}
//       name={name}
//       description="Withdraw your Google Play Store gift cards instantly."
//     />
//   );
// };

// export default PayoutGPlay;

// gplay.jsx

import { useEffect, useState } from "react";
import style from "./PayoutUpi.module.css";
import googlePlayLogo from "../../../assets/wallet/googlePlay-logo.webp";
import RedeemBase from "./AbstractRedeem/RedeemBase";
import { getVoucherOptions } from "../../../services/walletService";
import { useList } from "../../../Context/ContextStore";

const PayoutGPlay = ({ name }) => {
  const [vouchers, setVouchers] = useState([]);
  const { isLoading, setIsLoading } = useList();

  useEffect(() => {
    const fetchVouchers = async () => {
      setIsLoading(true);
      try {
        const data = await getVoucherOptions("google-play");
        setVouchers(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVouchers();
  }, []);

  return (
    <RedeemBase
      vouchers={vouchers}
      loading={isLoading}
      payoutType="google-play"
      logo={googlePlayLogo}
      logoClass={style.gPlayLogo}
      fillClass={style.fillAmazon}
      selectedClass={style.selectedAmzGpl}
      style={style}
      name={name}
      description="Withdraw your Google Play Store gift cards instantly."
    />
  );
};

export default PayoutGPlay;
