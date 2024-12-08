import { useEffect, useState } from "react";
import { useFilmsStore } from "../Film/FilmStore";
import { Film } from "../Film/Film";

export const FilmPage = () => {
  const [isFilm, setIsFilm] = useState<Film>();
  const { getFilm } = useFilmsStore((state) => state.actions);

  useEffect(() => {
    const getFilmFromStore = () => {
      const film = getFilm();
      setIsFilm(film);
    };

    getFilmFromStore();
  }, []);

  return (
    <div className="filmPage">
      <div className="filmPage__film">
        <div className="film_media">
          <div className="film_media_foto"></div>
        </div>
        <div className="film__info">
          <div className="info">
            <div className="info__about">
              <h2></h2>
              <p></p>
              <p></p>
            </div>
            <div className="info__reviev">
              <h3></h3>
              <p></p>
              <button></button>
              <p></p>
            </div>
          </div>
          <div className="info_options">
            <button></button>
            <a href=""></a>
            <a href=""></a>
          </div>
        </div>
      </div>
    </div>
  );
};
