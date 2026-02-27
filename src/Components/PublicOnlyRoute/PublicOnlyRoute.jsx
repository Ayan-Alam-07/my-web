import { Navigate } from "react-router-dom";
import { useList } from "../../Context/ContextStore";

export default function PublicOnlyRoute({ children }) {
  const { isAuthenticated } = useList();

  if (isAuthenticated) {
    return <Navigate to="/Home" replace />;
  }

  return children;
}
