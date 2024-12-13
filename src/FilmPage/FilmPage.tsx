import { useEffect, useState } from "react";
import { useFilmsStore } from "../Film/FilmStore";
import { Film } from "../Film/Film";

import "./FilmPage.css";

export const FilmPage = () => {
  const [isFilm, setIsFilm] = useState<Film>();
  const { getFilm } = useFilmsStore((state) => state.actions);

  useEffect(() => {
    const getFilmFromStore = () => {
      const film = getFilm();
      setIsFilm(film);
      console.log(isFilm);
    };

    getFilmFromStore();
  }, []);

  return (
    <div className="filmPage">
      <div className="filmPage__film">
        <div className="film_media">
          <div className="film_media_foto">
            <img
              src={`https://image.tmdb.org/t/p/original/${isFilm?.poster_path}`}
              alt=""
            />
          </div>
        </div>
        <div className="film__info">
          <div className="info">
            <div className="info__about">
              <h2>{isFilm?.title}</h2>
              <p>{isFilm?.original_language}</p>
              <p>{isFilm?.overview}</p>
            </div>
            <div className="info__reviev">
              <h3>{isFilm?.vote_average}</h3>
              <p>{isFilm?.vote_count} оценок</p>
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
