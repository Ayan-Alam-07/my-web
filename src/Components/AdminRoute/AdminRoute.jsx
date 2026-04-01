import { Navigate } from "react-router-dom";
import { useList } from "../../Context/ContextStore";

const AdminRoute = ({ children }) => {
  const { user } = useList();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
