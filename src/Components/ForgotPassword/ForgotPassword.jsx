import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [timer, setTimer] = useState(0);
  const [lockedUntil, setLockedUntil] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = import.meta.env.VITE_API_URL;

  // 🔥 Countdown logic
  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  // ========================
  // SEND RESET OTP
  // ========================
  const sendResetOtp = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/api/auth/forgot-password/send-otp`, {
        email,
      });

      alert(res.data.message);
      setStep(2);
      setTimer(60);
    } catch (error) {
      if (error.response?.status === 403) {
        setLockedUntil(error.response.data.lockUntil);
      }

      alert(error.response?.data?.message || error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  // ========================
  // RESET PASSWORD
  // ========================
  const resetPassword = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(`${API}/api/auth/forgot-password/reset`, {
        email,
        otp,
        newPassword,
      });

      alert(res.data.message);

      navigate("/login");
    } catch (error) {
      if (error.response?.status === 403) {
        setLockedUntil(true);
      }

      alert(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "40px" }}>
      <h2>Forgot Password</h2>

      {step === 1 && (
        <>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <br />

          <button
            type="button"
            disabled={timer > 0 || lockedUntil || loading}
            onClick={sendResetOtp}
          >
            {lockedUntil
              ? "Account Locked"
              : timer > 0
                ? `Resend OTP (${timer}s)`
                : "Send Reset OTP"}
          </button>
        </>
      )}

      {step === 2 && (
        <form onSubmit={resetPassword}>
          <label>OTP:</label>
          <input
            type="number"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <br />
          <br />

          <label>New Password:</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <br />
          <br />

          <button type="submit" disabled={loading}>
            Reset Password
          </button>

          <br />
          <br />

          <button type="button" disabled={timer > 0} onClick={sendResetOtp}>
            {timer > 0 ? `Resend OTP (${timer}s)` : "Resend OTP"}
          </button>
        </form>
      )}

      <br />

      <p
        style={{ cursor: "pointer", color: "blue" }}
        onClick={() => navigate("/login")}
      >
        Back to Login
      </p>
    </div>
  );
}
