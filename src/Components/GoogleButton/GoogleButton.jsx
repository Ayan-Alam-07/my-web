import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useList } from "../../Context/ContextStore";
import { showError, showSuccess } from "../../utils/Toast";

export default function GoogleButton({ referralInput }) {
  const { login, setIsLoading } = useList();
  const navigate = useNavigate();

  // console.log("Referral being sent:", referralInput);

  const handleCredentialResponse = async (response) => {
    try {
      setIsLoading(true);

      const res = await axios.post(
        // `${import.meta.env.VITE_API_URL}/api/auth/google-login`,
        `${import.meta.env.VITE_API_URL}/auth/google-login`,
        {
          token: response.credential,
          referralInput: localStorage.getItem("referralCode"),
        },
      );

      login(res.data);

      showSuccess("Login successful");

      navigate("/Home");
    } catch (err) {
      console.log(err.response?.data || err.message);
      showError("Google login failed");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!window.google) return;

    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      {
        theme: "outline",
        size: "large",
        width: "100%",
      },
    );
  }, []);

  return <div id="googleBtn" style={{ marginTop: "15px" }} />;
}
