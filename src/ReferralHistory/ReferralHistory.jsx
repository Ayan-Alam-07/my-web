import { useEffect, useState } from "react";
import axios from "axios";
import style from "./ReferralHistory.module.css";
import { useList } from "../Context/ContextStore";
import { showSuccess, showError } from "../utils/Toast";
import CommonNavArr from "../Components/CommonComponents/CommonNavArr";

export default function ReferralHistory() {
  const { user, setIsLoading, isLoading } = useList();
  const [referrals, setReferrals] = useState([]);

  useEffect(() => {
    if (!user?.token) return;

    const fetchHistory = async () => {
      try {
        setIsLoading(true);

        const res = await axios.get(
          // `${import.meta.env.VITE_API_URL}/api/auth/referral-history`,
          `${import.meta.env.VITE_API_URL}/auth/referral-history`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          },
        );
        showSuccess("Fetched Referral History");
        setReferrals(res.data.referrals);
      } catch (err) {
        console.log(err.response?.data || err.message);
        showError("Failed to fetch referral history");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, [user]);

  return (
    <div className="container-fluid px-0">
      <CommonNavArr id={12} navigation={"/Home"} />

      <div className="container px-2">
        <div className={style.container}>
          <h2 className={style.heading}>Referral Details</h2>

          {isLoading ? (
            <div className={style.loader}>Fetching referrals...</div>
          ) : referrals.length === 0 ? (
            <div className={style.emptyState}>
              No referrals yet. Start sharing your referral link to your
              friends!
            </div>
          ) : (
            <div className={style.tableWrapper}>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User ID</th>
                    <th>Email</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {referrals.map((ref, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{ref.userId}</td>
                      <td>{ref.email}</td>
                      <td>{new Date(ref.referredAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
