import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useList } from "../../Context/ContextStore";

export function ToastCleaner() {
  const location = useLocation();
  const { user } = useList();

  useEffect(() => {
    if (user !== null) toast.dismiss();
  }, [location]);

  return null;
}
