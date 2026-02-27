import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function GoogleButton({ referralInput }) {
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
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/google-login`,
        {
          token: response.credential,
          referralInput,
        },
      );

      login(res.data); // 🔥 UPDATE CONTEXT FIRST
      navigate("/Home"); // 🔥 THEN NAVIGATE
      // localStorage.setItem("user", JSON.stringify(res.data));
    } catch (err) {
      alert("Google login failed");
      console.log(err);
    }
  };

  return <div id="googleBtn" style={{ marginTop: "15px" }}></div>;
}
