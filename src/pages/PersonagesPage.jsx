import axios from "axios";
import { useState, useEffect } from "react";
import ButtonFavoris from "../components/Fiche";

const PersonPage = ({ search }) => {
  // console.log("search personages", search);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [favoris, setFavoris] = useState(
    JSON.parse(localStorage.getItem("favoris")) || [],
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = import.meta.env.VITE_API_URL + "/personages";

        if (search) {
          url += `?name=${search}`;
        }

        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("une erreur est survenue", error);
      }
    };
    fetchData();
  }, [search]);

  // 👉 ajouter / supprimer un favori
  const toggleFavoris = (personnage) => {
    const isFav = favoris.find((fav) => fav._id === personnage._id);

    let newFavoris;
    if (isFav) {
      newFavoris = favoris.filter((fav) => fav._id !== personnage._id);
    } else {
      newFavoris = [...favoris, personnage];
    }

    setFavoris(newFavoris);
    localStorage.setItem("favoris", JSON.stringify(newFavoris));
  };

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="Box_Card">
      {/* ❌ Aucun résultat */}
      {search && data.results.length === 0 && (
        <p className="NoResult">Aucun résultat pour « {search} »</p>
      )}

      {/* ✅ Résultats */}
      {data.results.map((personnage) => {
        const variant = "portrait_xlarge";
        const url = personnage.thumbnail.path;
        const extension = personnage.thumbnail.extension;
        const imgUrl = `${url}/${variant}.${extension}`;

        const isFav = favoris.some((fav) => fav._id === personnage._id);

        return (
          <div className="Card" key={personnage._id}>
            <img src={imgUrl} alt={personnage.name} />
            <p className="Title">{personnage.name}</p>
            <p className="Description">{personnage.description}</p>

            <ButtonFavoris
              isFav={isFav}
              onClick={() => toggleFavoris(personnage)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PersonPage;
