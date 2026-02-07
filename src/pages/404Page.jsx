import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Oups!🔒️ La page que vous cherchez n’existe pas.</p>
      <Link to="/" className="btn-home">
        🏠 Retour à l’accueil
      </Link>
    </div>
  );
};

export default NotFound;
