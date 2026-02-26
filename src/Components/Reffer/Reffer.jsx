import { useEffect, useState } from "react";

export default function Referral() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  if (!user) return <p>Please Login</p>;

  const referralLink = `${window.location.origin}/register?ref=${user.referralCode}`;

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Referral Dashboard</h2>

      <p>User ID: {user.userId}</p>
      <p>Total Coins: {user.coins}</p>

      <h3>Your Referral Code</h3>
      <p>{user.referralCode}</p>

      <h4>Share this link:</h4>
      <input value={referralLink} readOnly />

      <p>Earn 111 coins per successful referral</p>
    </div>
  );
}
