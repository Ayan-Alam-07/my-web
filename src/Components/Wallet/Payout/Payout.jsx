import CommonNavArr from "../../CommonComponents/CommonNavArr";
import PayoutUpi from "./PayoutUpi";
import { useList } from "../../../Context/ContextStore";
import { useLocation } from "react-router-dom";
import PayoutAmazon from "./PayoutAmazon";
import PayoutGPlay from "./PayoutGPlay";
import PayoutPaypal from "./PayoutPaypal";
import PayoutAmazonGlob from "./PayoutAmazonGlob";
import PayoutUsdtGlob from "./PayoutUsdt";
import PayoutBtcGlob from "./PayoutBtc";

const Payout = () => {
  const { locationData } = useList();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paymentMethod = queryParams.get("method");

  // {paymentMethod === "amazon" ? <PayoutAmazon name="Amazon" /> : ""}

  return (
    <>
      <CommonNavArr id={2} navigation={"/Wallet"}></CommonNavArr>
      {paymentMethod === "upi" && <PayoutUpi name="Upi" />}
      {paymentMethod === "googlePlay" && <PayoutGPlay name="G-Play" />}
      {paymentMethod === "paypal" && <PayoutPaypal name="PayPal" />}
      {paymentMethod === "usdt" && <PayoutUsdtGlob name="usdtGlob" />}
      {paymentMethod === "btc" && <PayoutBtcGlob name="btcGlob" />}

      {paymentMethod === "amazon" &&
        (locationData.country === "IN" ? (
          <PayoutAmazon name="Amazon" />
        ) : (
          <PayoutAmazonGlob name="amazonGlob" />
        ))}
      {console.log("Country:", locationData.country)}
    </>
  );
};
export default Payout;
