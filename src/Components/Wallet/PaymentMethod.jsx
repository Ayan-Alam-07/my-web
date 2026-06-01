import PayoutInd from "./PayMethReg/PayoutInd";
import PayoutGlob from "./PayGlobReg/PayoutGlob";
import { useList } from "../../Context/ContextStore";

const PaymentMethod = () => {
  const { locationData } = useList(); // Or show a loader

  return (
    <>
      <PayoutInd />

      {/* {locationData.country === "IN" || locationData.error ? (
        <PayoutInd />
      ) : (
        <PayoutGlob />
      )} */}
    </>
  );
};
export default PaymentMethod;
