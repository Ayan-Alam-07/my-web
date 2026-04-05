import { useEffect } from "react";
import CommonNavArr from "../CommonComponents/CommonNavArr";
import WalletBody from "./WalletBody";
import { useList } from "../../Context/ContextStore";
// import { getMyWithdrawals } from "../../services/walletService";

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
      <CommonNavArr id={1} navigation={"/Home"} />
      <WalletBody />
    </>
  );
};

export default Wallet;
