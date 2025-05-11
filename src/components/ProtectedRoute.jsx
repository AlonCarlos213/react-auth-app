// 📁 src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  // ✅ Comparar con el formato de roles que viene del backend
  if (role && !user.roles.includes(`ROLE_${role.toUpperCase()}`)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
