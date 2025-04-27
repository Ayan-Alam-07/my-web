import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useList } from "../../Context/ContextStore";

const Wallet = () => {
  const { list } = useList();
  const itemNeeded = list[0];
  return (
    <div>
      <p>{itemNeeded}</p>
    </div>
  );
};
export default Wallet;
