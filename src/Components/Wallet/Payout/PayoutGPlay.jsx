import style from "./PayoutUpi.module.css";
import googlePlayLogo from "../../../assets/wallet/googlePlay-logo.webp";
import RedeemBase from "./AbstractRedeem/RedeemBase";

const PayoutGPlay = ({ name }) => {
  const vouchers = [
    { id: 1, amount: 10, requiredCoins: 2600 },
    { id: 2, amount: 25, requiredCoins: 6000 },
    { id: 3, amount: 50, requiredCoins: 11000 },
    { id: 4, amount: 100, requiredCoins: 20500 },
    { id: 5, amount: 150, requiredCoins: 30000 },
  ];

  return (
    <RedeemBase
      vouchers={vouchers}
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
