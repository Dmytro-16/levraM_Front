const FavorisPage = () => {
  const favoris = JSON.parse(localStorage.getItem("favoris")) || [];

  return (
    <main className="Favoris_Page">
      <div className="Box_Card">
        {favoris.length === 0 ? (
          <h2>Aucun favori pour le moment😢</h2>
        ) : (
          favoris.map((personnage) => {
            const variant = "portrait_xlarge";
            const imgUrl = `${personnage.thumbnail.path}/${variant}.${personnage.thumbnail.extension}`;

            return (
              <div className="Card" key={personnage._id}>
                <img src={imgUrl} alt={personnage.name} />
                <p className="Title">{personnage.name}</p>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
};

export default FavorisPage;
