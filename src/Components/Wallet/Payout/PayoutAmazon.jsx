// import style from "./PayoutUpi.module.css";
// import amazonLogo from "../../../assets/wallet/amazon-logo.webp";
// import RedeemBase from "./AbstractRedeem/RedeemBase";

// const PayoutAmazon = ({ name }) => {
//   const vouchers = [
//     { id: 1, amount: 10, requiredCoins: 2700 },
//     { id: 2, amount: 25, requiredCoins: 6250 },
//     { id: 3, amount: 50, requiredCoins: 12000 },
//     { id: 4, amount: 100, requiredCoins: 22000 },
//     { id: 5, amount: 150, requiredCoins: 31500 },
//     { id: 6, amount: 300, requiredCoins: 60000 },
//   ];

//   return (
//     <RedeemBase
//       vouchers={vouchers}
//       logo={amazonLogo}
//       logoClass={style.amazonLogo}
//       fillClass={style.fillAmazon}
//       selectedClass={style.selectedAmzGpl}
//       style={style}
//       name={name}
//       description="Redeem your rewards for Amazon Gift Cards and withdraw instantly."
//     />
//   );
// };

// export default PayoutAmazon;

// amazon.jsx

import { useEffect, useState } from "react";
import style from "./PayoutUpi.module.css";
import amazonLogo from "../../../assets/wallet/amazon-logo.webp";
import RedeemBase from "./AbstractRedeem/RedeemBase";
import { getVoucherOptions } from "../../../services/walletService";
import { useList } from "../../../Context/ContextStore";

const PayoutAmazon = ({ name }) => {
  const [vouchers, setVouchers] = useState([]);
  const { isLoading, setIsLoading } = useList();

  useEffect(() => {
    const fetchVouchers = async () => {
      setIsLoading(true);
      try {
        const data = await getVoucherOptions("amazon");
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
      payoutType="amazon"
      logo={amazonLogo}
      logoClass={style.amazonLogo}
      fillClass={style.fillAmazon}
      selectedClass={style.selectedAmzGpl}
      style={style}
      name={name}
      description="Redeem your rewards for Amazon Gift Cards and withdraw instantly."
    />
  );
};

export default PayoutAmazon;
