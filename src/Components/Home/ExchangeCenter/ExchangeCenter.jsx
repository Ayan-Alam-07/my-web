import CommonNavArr from "../../CommonComponents/CommonNavArr";
import ExchangeCenterBody from "./ExchangeCenterBody";

const ExchangeCenter = () => {
  return (
    <>
      <CommonNavArr id={6} navigation={"/Home"} />
      <ExchangeCenterBody />
    </>
  );
};
export default ExchangeCenter;
