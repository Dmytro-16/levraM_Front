import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ButtonFavoris from "../components/Fiche";
import CardSkeleton from "../components/CardSkeleton";

const PersonPage = ({ search, token }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [favoris, setFavoris] = useState(
    JSON.parse(localStorage.getItem("favorisPersonnages")) || [],
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let url = import.meta.env.VITE_API_URL + "/personages";

        if (search) {
          url += `?name=${search}`;
        }

        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log("Une erreur est survenue", error);
      } finally {
        setIsLoading(false);
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
    localStorage.setItem("favorisPersonnages", JSON.stringify(newFavoris));
  };

  if (isLoading)
    return (
      <div className="Box_Card">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );

  return (
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

            {token ? (
              <ButtonFavoris
                isFav={isFav}
                onClick={() => toggleFavoris(personnage)}
              />
            ) : (
              <Link to="/login" className="Login_Required">
                Connectez-vous pour ajouter aux favoris
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PersonPage;
