import CommonNavArr from "../../CommonComponents/CommonNavArr";
import SecFooter from "../../CommonComponents/SecFooter";
import ExchangeCenterBody from "./ExchangeCenterBody";

const ExchangeCenter = () => {
  return (
    <>
      <CommonNavArr id={6} navigation={"/Home"} />
      <ExchangeCenterBody />
      <div className="pt-1 pt-lg-3 mt-md-5">
        <SecFooter
          mt={30}
          mb={35}
          name={"Exchange Center"}
          link={"/help-center/wallet/gems-exchange-center"}
        />
      </div>
    </>
  );
};
export default ExchangeCenter;
