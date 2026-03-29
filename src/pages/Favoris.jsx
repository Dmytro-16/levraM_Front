const FavorisPage = () => {
  const personnages =
    JSON.parse(localStorage.getItem("favorisPersonnages")) || [];
  const comics = JSON.parse(localStorage.getItem("favorisComics")) || [];

  const isEmpty = personnages.length === 0 && comics.length === 0;

  return (
    <main className="Favoris_Page">
      <div className="Favoris_Header">
        <h1 className="Favoris_Title">MES FAVORIS</h1>
        <p className="Favoris_Count">
          {personnages.length + comics.length} élément
          {personnages.length + comics.length !== 1 ? "s" : ""} sauvegardé
          {personnages.length + comics.length !== 1 ? "s" : ""}
        </p>
      </div>

      {isEmpty ? (
        <div className="Favoris_Empty">
          <span className="Favoris_Empty_Icon">🤍</span>
          <p>Aucun favori pour le moment</p>
          <p className="Favoris_Empty_Sub">
            Ajoutez des personnages ou comics depuis les pages dédiées
          </p>
        </div>
      ) : (
        <>
          <section>
            <div className="Box_Card">
              <h2>Personnages</h2>
              {personnages.length === 0 ? (
                <p className="Favoris_Section_Empty">
                  Aucun personnage en favori
                </p>
              ) : (
                personnages.map((personnage) => {
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
          </section>

          <section>
            <div className="Box_Card">
              <h2>Comics</h2>
              {comics.length === 0 ? (
                <p className="Favoris_Section_Empty">Aucun comic en favori</p>
              ) : (
                comics.map((comic) => {
                  const variant = "portrait_xlarge";
                  const imgUrl = `${comic.thumbnail.path}/${variant}.${comic.thumbnail.extension}`;
                  return (
                    <div className="Card" key={comic._id}>
                      <img src={imgUrl} alt={comic.title} />
                      <p className="Title">{comic.title}</p>
                    </div>
                  );
                })
              )}
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default FavorisPage;
