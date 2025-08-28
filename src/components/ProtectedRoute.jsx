import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const session = JSON.parse(localStorage.getItem("supabaseSession"));

  if (!session) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
