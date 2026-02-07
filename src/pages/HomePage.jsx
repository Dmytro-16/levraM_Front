import Image from "../images/1.webp";
import Image2 from "../images/2.webp";
import Image3 from "../images/3.webp";
import ImageD from "../images/LOGOD.jpg";

const HomePage = () => {
  return (
    <main className="HomePage">
      <div className="Line_1">
        <p className="Text_Link_Disney">STREAM WONDER MAN EXCLUSIVELY ON </p>

        <a
          href="https://www.disneyplus.com/fr-fr/browse/entity-555c5896-02e4-4873-8fa9-ce090dcd874b?cid=DTCI-Synergy-Marvel-Site-Acquisition-Originals-US-Marvel-WonderMan-EN-NavPipe-Marvel_NavPipe_WonderMan-NA"
          target="_blank"
        >
          <img src={ImageD} alt="Disney+" />
        </a>
      </div>

      <div className="Box_Image">
        <img className="Image_M" src={Image} alt="Image1" />
        <img className="Image_M1" src={Image2} alt="Image2" />
        <img className="Image_M2" src={Image3} alt="Image3" />
        <img className="Image_M" src={Image} alt="Image1" />
        <img className="Image_M1" src={Image2} alt="Image2" />
        <img className="Image_M2" src={Image3} alt="Image3" />
        <img className="Image_M" src={Image} alt="Image1" />
        <img className="Image_M1" src={Image2} alt="Image2" />
        <img className="Image_M2" src={Image3} alt="Image3" />
      </div>
      <div className="Box_Image">
        <img className="Image_M" src={Image} alt="Image1" />
        <img className="Image_M1" src={Image2} alt="Image2" />
        <img className="Image_M2" src={Image3} alt="Image3" />
        <img className="Image_M" src={Image} alt="Image1" />
        <img className="Image_M1" src={Image2} alt="Image2" />
        <img className="Image_M2" src={Image3} alt="Image3" />
        <img className="Image_M" src={Image} alt="Image1" />
        <img className="Image_M1" src={Image2} alt="Image2" />
        <img className="Image_M2" src={Image3} alt="Image3" />
      </div>
      <div className="Box_Image">
        <img className="Image_M" src={Image} alt="Image1" />
        <img className="Image_M1" src={Image2} alt="Image2" />
        <img className="Image_M2" src={Image3} alt="Image3" />
        <img className="Image_M" src={Image} alt="Image1" />
        <img className="Image_M1" src={Image2} alt="Image2" />
        <img className="Image_M2" src={Image3} alt="Image3" />
        <img className="Image_M" src={Image} alt="Image1" />
        <img className="Image_M1" src={Image2} alt="Image2" />
        <img className="Image_M2" src={Image3} alt="Image3" />
      </div>
    </main>
  );
};
export default HomePage;
