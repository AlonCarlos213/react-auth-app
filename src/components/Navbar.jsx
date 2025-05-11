// src/components/Navbar.jsx
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const roles = user?.roles || [];

  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Inicio</Link>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}
        {roles.includes("ROLE_USER") && <Link to="/user">User</Link>}
        {roles.includes("ROLE_MODERATOR") && <Link to="/moderator">Moderator</Link>}
        {roles.includes("ROLE_ADMIN") && <Link to="/admin">Admin</Link>}
      </div>

      {user && <button onClick={logout}>Cerrar sesión</button>}
    </nav>
  );
};

export default Navbar;
