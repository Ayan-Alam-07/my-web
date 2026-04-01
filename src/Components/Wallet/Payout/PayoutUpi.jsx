import RedeemBase from "./AbstractRedeem/RedeemBase";
import style from "./PayoutUpi.module.css";
import upiLogo from "../../../assets/wallet/upi-logo.webp";

const PayoutUpi = ({ name }) => {
  const vouchers = [
    { id: 1, amount: 10, requiredCoins: 2400 },
    { id: 2, amount: 25, requiredCoins: 5800 },
    { id: 3, amount: 50, requiredCoins: 10000 },
    { id: 4, amount: 100, requiredCoins: 19500 },
    { id: 5, amount: 150, requiredCoins: 28500 },
    { id: 6, amount: 300, requiredCoins: 52500 },
    { id: 7, amount: 500, requiredCoins: 80500 },
    { id: 8, amount: 1000, requiredCoins: 150000 },
  ];

  return (
    <RedeemBase
      vouchers={vouchers}
      logo={upiLogo}
      logoClass={style.redeemLogo}
      fillClass={style.fill}
      selectedClass={style.selected}
      style={style}
      name={name}
      description="Redeem UPI vouchers instantly and enjoy hassle-free withdrawals directly to your bank account."
    />
  );
};
export default PayoutUpi;
