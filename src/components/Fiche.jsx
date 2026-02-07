const ButtonFavoris = ({ isFav, onClick }) => {
  return (
    <button onClick={onClick}>
      {isFav ? "❤️ Retirer des favoris" : "🤍 Ajouter aux favoris"}
    </button>
  );
};

export default ButtonFavoris;
