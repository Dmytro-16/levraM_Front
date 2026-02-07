import Image from "../images/LogoM.png";
import { Link } from "react-router-dom";

const Header = ({ search, setSearch }) => {
  return (
    <>
      <nav className="Container">
        <div className="Block_1">
          <div className="Element">
            <div className="Button_L">
              <Link to="/login">
                <button>LOG IN</button>
              </Link>

              {/* <i class="fa-regular fa-house"></i> */}
              <Link to="/signup">
                <button>SIGN UP</button>
              </Link>
            </div>
            <div>
              <Link to="/">
                <img className="Logo" src={Image} alt="Logo_Mar" />
              </Link>
            </div>
            <div className="Button_R">
              <div className="SearchBtn">
                <i
                  className="fa-solid fa-magnifying-glass"
                  aria-hidden="true"
                ></i>

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
