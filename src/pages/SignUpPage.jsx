import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SignUpPage({ handleToken }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
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
        import.meta.env.VITE_API_URL + "/signup",
        { username, email, password }
      );
      const receivedUsername =
        response.data.username ?? response.data.account?.username;
      handleToken(response.data.token, receivedUsername);
      navigate("/compte");
    } catch (err) {
      setError(err.response?.data?.message || "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="SignUp-container">
      <h1>SIGN UP</h1>
      <form className="Signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        {error && <p style={{ color: "#d90303", fontSize: "0.9rem" }}>{error}</p>}
        <button type="submit" className="SignUp-btn" disabled={isLoading}>
          {isLoading ? "..." : "Create Account"}
        </button>
        <p style={{ color: "#888", fontSize: "0.85rem" }}>
          Déjà un compte ?{" "}
          <Link to="/login" style={{ color: "#d90303" }}>
            Se connecter
          </Link>
        </p>
      </form>
    </div>
  );
}
