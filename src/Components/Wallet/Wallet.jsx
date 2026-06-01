import { useEffect } from "react";
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
      <WalletBody />
    </>
  );
};

export default Wallet;
