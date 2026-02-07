import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ButtonFavoris from "../components/Fiche";
import.meta.env.VITE_API_URL;

const ComicsPage = ({ search }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [favoris, setFavoris] = useState([]);
  // console.log("search comics", search);

  /* 🔹 Charger les favoris depuis le cookie */
  useEffect(() => {
    const storedFavoris = Cookies.get("favorisComics");
    if (storedFavoris) {
      try {
        setFavoris(JSON.parse(storedFavoris));
      } catch {
        setFavoris([]);
      }
    }
  }, []);

  /* 🔹 Sauvegarder les favoris dans le cookie */
  useEffect(() => {
    Cookies.set("favorisComics", JSON.stringify(favoris), {
      expires: 30,
      sameSite: "strict",
    });
  }, [favoris]);

  /* 🔹 Fetch DATA comics */
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = import.meta.env.VITE_API_URL + "/comics";

        if (search) {
          url += `?title=${search}`;
        }

        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error("Une erreur est survenue", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  // 👉 ajouter / supprimer un favori
  const toggleFavoris = (comic) => {
    const isFav = favoris.some((fav) => fav._id === comic._id);

    let newFavoris;
    if (isFav) {
      newFavoris = favoris.filter((fav) => fav._id !== comic._id);
    } else {
      newFavoris = [...favoris, comic];
    }

    setFavoris(newFavoris);
  };

  if (isLoading) return <div>En cours de chargement...</div>;
  if (!data) return <div>Aucune donnée disponible</div>;

  return (
    <div className="Box_Card">
      {/* ❌ Aucun résultat */}
      {search && data.results.length === 0 && (
        <p className="NoResult">Aucun résultat pour « {search} »</p>
      )}

      {/* ✅ Résultats */}
      {data.results.map((comic) => {
        const variant = "portrait_xlarge";
        const { path, extension } = comic.thumbnail;
        const imgUrl = `${path}/${variant}.${extension}`;
        const isFav = favoris.some((fav) => fav._id === comic._id);

        return (
          <div key={comic._id} className="Card">
            <img src={imgUrl} alt={comic.title} />
            <p className="Title">{comic.title}</p>
            <p className="Description">
              {comic.description || "Pas de description"}
            </p>

            {/* ❤️ BOUTON FAVORIS PAR CARTE */}
            <ButtonFavoris isFav={isFav} onClick={() => toggleFavoris(comic)} />
          </div>
        );
      })}
    </div>
  );
};

export default ComicsPage;
