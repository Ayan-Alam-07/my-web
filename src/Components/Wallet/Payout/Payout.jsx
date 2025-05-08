import CommonNavArr from "../../CommonComponents/CommonNavArr";
import PayoutUpi from "./PayoutUpi";
import { useLocation } from "react-router-dom";
import PayoutAmazon from "./PayoutAmazon";
import PayoutGPlay from "./PayoutGPlay";

const Payout = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paymentMethod = queryParams.get("method");

  return (
    <>
      <CommonNavArr id={2} navigation={"/Wallet"}></CommonNavArr>
      {paymentMethod === "upi" ? <PayoutUpi name="upi" /> : ""}
      {paymentMethod === "amazon" ? <PayoutAmazon name="amazon" /> : ""}
      {paymentMethod === "googlePlay" ? <PayoutGPlay name="G-Play" /> : ""}
    </>
  );
};
export default Payout;
