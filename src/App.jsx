// Import

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//***IMPORT ===> PAGE***
import HomePage from "./pages/HomePage";
import PersonPage from "./pages/PersonagesPage";
import ComicsPage from "./pages/ComicsPage";
import FavorisPage from "./pages/Favoris";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ComptePage from "./pages/ComptePage";
import NotFound from "./pages/404Page";

//***IMPORT ===> COMPONENTS***
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");

  const [token, setToken] = useState(Cookies.get("Marvel_Token") || null);
  const [username, setUsername] = useState(
    Cookies.get("Marvel_Username") || null
  );

  const handleToken = (token, username) => {
    if (token) {
      Cookies.set("Marvel_Token", token, { expires: 30 });
      Cookies.set("Marvel_Username", username, { expires: 30 });
      setToken(token);
      setUsername(username);
    } else {
      Cookies.remove("Marvel_Token");
      Cookies.remove("Marvel_Username");
      setToken(null);
      setUsername(null);
    }
  };

  return (
    <>
      <Router>
        <Header
          handleToken={handleToken}
          token={token}
          username={username}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/personages"
            element={<PersonPage search={search} token={token} />}
          />
          <Route
            path="/comics"
            element={<ComicsPage token={token} search={search} />}
          />
          <Route path="/favoris" element={<FavorisPage />} />
          <Route path="/login" element={<LoginPage handleToken={handleToken} />} />
          <Route path="/signup" element={<SignUpPage handleToken={handleToken} />} />
          <Route
            path="/compte"
            element={
              <ComptePage
                token={token}
                username={username}
                handleToken={handleToken}
              />
            }
          />

          {/* 👇 route 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
