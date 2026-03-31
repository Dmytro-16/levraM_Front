import { useNavigate, Link, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ComptePage({ token, username, handleToken }) {
  const navigate = useNavigate();

  const effectiveToken = token || Cookies.get("Marvel_Token"); // Vérifie le token dans les props ou dans les cookies
  const effectiveUsername = username || Cookies.get("Marvel_Username");

  if (!effectiveToken) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    handleToken(null);
    navigate("/");
  };

  return (
    <div className="Login-container">
      <h1>MON COMPTE</h1>
      <div className="Login-form" style={{ gap: "20px" }}>
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "rgb(217, 3, 3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.2rem",
              margin: "0 auto 12px",
            }}
          >
            {effectiveUsername ? effectiveUsername[0].toUpperCase() : "?"}
          </div>
          <p
            style={{
              fontFamily: "'Red Hat Display', sans-serif",
              fontSize: "1.4rem",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            {effectiveUsername}
          </p>
          <p style={{ color: "#888", fontSize: "0.85rem", marginTop: "4px" }}>
            Connecté
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
          }}
        >
          <Link to="/favoris" style={{ width: "100%" }}>
            <button style={{ width: "100%" }}>Mes Favoris</button>
          </Link>
          <Link to="/personages" style={{ width: "100%" }}>
            <button style={{ width: "100%" }}>Personnages</button>
          </Link>
          <Link to="/comics" style={{ width: "100%" }}>
            <button style={{ width: "100%" }}>Comics</button>
          </Link>
        </div>

        <button
          onClick={handleLogout}
          style={{
            width: "100%",
            background: "rgba(217, 3, 3, 0.15)",
            borderColor: "rgb(217, 3, 3)",
            color: "rgb(217, 3, 3)",
          }}
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
