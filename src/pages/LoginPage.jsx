import axios from "axios";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage({ handleToken }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "/login",
        { email, password },
      );
      console.log("Login réussi, data reçu:", response.data);
      const token = response.data.token;
      const username =
        response.data.username ?? response.data.account?.username;
      if (!token) {
        setError("Token introuvable dans la réponse du serveur");
        return;
      }
      handleToken(token, username);
      navigate("/compte");
    } catch (err) {
      setError(
        err.response?.data?.message || "Email ou mot de passe incorrect",
      );
      console.error("Une erreur est survenue, détails:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Login-container">
      <h1>LOGIN</h1>
      <form className="Login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && (
          <p style={{ color: "#d90303", fontSize: "0.9rem" }}>{error}</p>
        )}
        <button type="submit" className="Login-btn" disabled={isLoading}>
          {isLoading ? "..." : "Log In"}
        </button>
        <p style={{ color: "#888", fontSize: "0.85rem" }}>
          Pas encore de compte ?{" "}
          <Link to="/signup" style={{ color: "#d90303" }}>
            S'inscrire
          </Link>
        </p>
      </form>
    </div>
  );
}
