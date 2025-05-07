import CommonNavArr from "../../CommonComponents/CommonNavArr";
import PayoutUpi from "./PayoutUpi";

const Payout = () => {
  return (
    <>
      <CommonNavArr id={2} navigation={"/Wallet"}></CommonNavArr>
      <PayoutUpi />
    </>
  );
};
export default Payout;
