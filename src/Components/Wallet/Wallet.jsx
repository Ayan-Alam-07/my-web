import CommonNavArr from "../CommonComponents/CommonNavArr";
import WalletBody from "./WalletBody";

const Wallet = () => {
  return (
    <>
      <CommonNavArr id={1} navigation={"/Home"} />
      <WalletBody></WalletBody>
    </>
  );
};
export default Wallet;
