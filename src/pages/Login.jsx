import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import authService from "../services/auth.service";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !password) {
      alert("Todos los campos son obligatorios");
      return;
    }
  
    try {
      const data = await authService.login(username, password);
      login(data);
      navigate("/user");
    } catch (err) {
      alert("Credenciales inválidas");
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
      <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
