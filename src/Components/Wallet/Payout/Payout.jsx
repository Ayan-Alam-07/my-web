import CommonNavArr from "../../CommonComponents/CommonNavArr";
import PayoutBody from "./PayoutBody";

const Payout = () => {
  return (
    <>
      <CommonNavArr id={2} navigation={"/Wallet"}></CommonNavArr>
      <PayoutBody></PayoutBody>
    </>
  );
};
export default Payout;
