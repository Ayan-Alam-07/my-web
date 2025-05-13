import PayoutInd from "./PayMethReg/PayoutInd";
import PayoutGlob from "./PayGlobReg/PayoutGlob";
import { useList } from "../../Context/ContextStore";

const PaymentMethod = () => {
  const { locationData } = useList(); // Or show a loader

  return <>{locationData.country === "IN" ? <PayoutInd /> : <PayoutGlob />}</>;
};
export default PaymentMethod;
