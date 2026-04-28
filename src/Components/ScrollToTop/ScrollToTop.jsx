import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly or instantly
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // or "instant"
    });
  }, [pathname]);

  return null;
}
