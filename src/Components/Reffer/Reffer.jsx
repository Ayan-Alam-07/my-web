import { useEffect, useState } from "react";

export default function Referral() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
  }, []);

  if (!user) return <p>Please Login</p>;

  const link = `http://localhost:5173/register?ref=${user.referralCode}`;

  return (
    <div>
      <h2>Referral Program</h2>

      <h3>Your Code: {user.referralCode}</h3>

      <input value={link} readOnly />

      <p>You earn 137 coins per referral</p>
    </div>
  );
}
