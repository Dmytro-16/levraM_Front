import { Link } from "react-router-dom";
import Image from "../images/1.webp";
import Image2 from "../images/2.webp";
import Image3 from "../images/3.webp";
import Image4 from "../images/d60uind-9cd7c864-af82-4b89-957b-8964a95fb227.jpg";
import Image5 from "../images/dc7tvw7-16e58146-6993-462e-9886-ed716b1e030b.png";
import Image6 from "../images/ea-motive-new-title-teaser-16x9-featured.jpg.adapt.crop16x9.575p.jpg";
import HeroBg from "../images/ea-motive-new-title-teaser-16x9-featured.jpg.adapt.crop16x9.575p.jpg";
import ImageD from "../images/LOGOD.jpg";

const HomePage = () => {
  return (
    <main className="HomePage">
      {/* ===== HERO ===== */}
      <section className="Hero" style={{ backgroundImage: `url(${HeroBg})` }}>
        <div className="Hero_Content">
          <h1 className="Hero_Title">MARVEL UNIVERSE</h1>
          <p className="Hero_Tagline">
            Explorez des milliers de comics et personnages
          </p>
          <div className="Hero_Buttons">
            <Link to="/comics">
              <button className="Hero_Btn">Explorer les Comics</button>
            </Link>
            <Link to="/personages">
              <button className="Hero_Btn Hero_Btn--outline">
                Voir les Personnages
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== DISNEY+ BANNER ===== */}
      <div className="Line_1">
        <p className="Text_Link_Disney">STREAM WONDER MAN EXCLUSIVELY ON </p>
        <a
          href="https://www.disneyplus.com/fr-fr/browse/entity-555c5896-02e4-4873-8fa9-ce090dcd874b"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ImageD} alt="Disney+" />
        </a>
      </div>

      {/* ===== MARQUEE ROW 1 (gauche) ===== */}
      <div className="Box_Image">
        <div className="Marquee_Inner">
          <img className="Image_M" src={Image} alt="Marvel 1" />
          <img className="Image_M1" src={Image2} alt="Marvel 2" />
          <img className="Image_M2" src={Image3} alt="Marvel 3" />
          <img className="Image_M" src={Image4} alt="Marvel 4" />
          <img className="Image_M1" src={Image5} alt="Marvel 5" />
          <img className="Image_M2" src={Image6} alt="Marvel 6" />
          {/* duplication pour boucle seamless */}
          <img className="Image_M" src={Image} alt="Marvel 1" />
          <img className="Image_M1" src={Image2} alt="Marvel 2" />
          <img className="Image_M2" src={Image3} alt="Marvel 3" />
          <img className="Image_M" src={Image4} alt="Marvel 4" />
          <img className="Image_M1" src={Image5} alt="Marvel 5" />
          <img className="Image_M2" src={Image6} alt="Marvel 6" />
        </div>
      </div>

      {/* ===== MARQUEE ROW 2 (droite) ===== */}
      <div className="Box_Image Box_Image--reverse">
        <div className="Marquee_Inner">
          <img className="Image_M2" src={Image6} alt="Marvel 6" />
          <img className="Image_M1" src={Image5} alt="Marvel 5" />
          <img className="Image_M" src={Image4} alt="Marvel 4" />
          <img className="Image_M2" src={Image3} alt="Marvel 3" />
          <img className="Image_M1" src={Image2} alt="Marvel 2" />
          <img className="Image_M" src={Image} alt="Marvel 1" />
          {/* duplication pour boucle seamless */}
          <img className="Image_M2" src={Image6} alt="Marvel 6" />
          <img className="Image_M1" src={Image5} alt="Marvel 5" />
          <img className="Image_M" src={Image4} alt="Marvel 4" />
          <img className="Image_M2" src={Image3} alt="Marvel 3" />
          <img className="Image_M1" src={Image2} alt="Marvel 2" />
          <img className="Image_M" src={Image} alt="Marvel 1" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
