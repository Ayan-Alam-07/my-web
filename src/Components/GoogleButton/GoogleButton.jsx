import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useList } from "../../Context/ContextStore";
import { showError, showSuccess } from "../../utils/Toast";

export default function GoogleButton({ referralInput }) {
  const { login, setIsLoading } = useList();
  const navigate = useNavigate();

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      { theme: "outline", size: "large" },
    );
  }, []);

  const handleCredentialResponse = async (response) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/google-login`,
        {
          token: response.credential,
          referralInput,
        },
      );

      login(res.data); // 🔥 UPDATE CONTEXT FIRST
      setIsLoading(false);
      showSuccess("Login success");
      navigate("/Home"); // 🔥 THEN NAVIGATE
    } catch (err) {
      setIsLoading(false);
      showError("Google login failed");
    }
  };

  return <div id="googleBtn" style={{ marginTop: "15px" }}></div>;
}
