import { useEffect } from "react";
import WalletBody from "./WalletBody";
import { useList } from "../../Context/ContextStore";
import SecFooter from "../CommonComponents/SecFooter";

const Wallet = () => {
  const { fetchWithdrawals } = useList();

  useEffect(() => {
    fetchWithdrawals();

    const handleRefreshWithdrawals = () => {
      fetchWithdrawals();
    };

    window.addEventListener("refreshWithdrawals", handleRefreshWithdrawals);

    return () => {
      window.removeEventListener(
        "refreshWithdrawals",
        handleRefreshWithdrawals,
      );
    };
  }, []);

  return (
    <>
      <WalletBody />
      <SecFooter
        mt={0}
        mb={30}
        name={"Withdrawals"}
        link={"/help-center/withdrawals/how-withdrawals-work"}
      />
    </>
  );
};

export default Wallet;
