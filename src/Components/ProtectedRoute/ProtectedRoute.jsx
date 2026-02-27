import { Navigate } from "react-router-dom";
import { useList } from "../../Context/ContextStore";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useList();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
