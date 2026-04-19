import Image from "../images/LogoM.png";
import { Link } from "react-router-dom";

const Header = ({ search, setSearch, token, username, handleToken }) => {
  return (
    <>
      <nav className="Container">
        <div className="Block_1">
          <div className="Element">
            <div className="Button_L">
              {token ? (
                <>
                  <Link to="/compte">
                    <button>👤 {username}</button>
                  </Link>
                  <button onClick={() => handleToken(null)}>LOG OUT</button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button>LOG IN</button>
                  </Link>
                  <Link to="/signup">
                    <button>SIGN UP</button>
                  </Link>
                </>
              )}
            </div>
            <div>
              <Link to="/">
                <img className="Logo" src={Image} alt="Logo_Mar" />
              </Link>
            </div>
            <div className="Button_R">
              <div className="SearchBtn">
                <i
                  // className="fa-solid fa-magnifying-glass"
                  // aria-hidden="false"
                > <svg className="SearchIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg></i>

                <input
                  className="SearchBar"
                  type="text"
                  placeholder="Rechercher"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="Block_2">
          <div className="Element_2">
            <Link to="/comics">
              <p className="Text">COMICS</p>
            </Link>
            <Link to="/personages">
              <p className="Text">PERSONAGES</p>
            </Link>
            <Link to="/favoris">
              <p className="Text">FAVORIS</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
