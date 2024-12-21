import { useEffect, useState } from "react";
import { useFilmsStore } from "../Film/FilmStore";
import { Film } from "../Film/Film";

import "./FilmPage.css";

export const FilmPage = () => {
  const [isFilm, setIsFilm] = useState<Film | null>();
  const film = useFilmsStore((state) => state.currentFilm);

  useEffect(() => {
    const getFilmFromStore = () => {
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
              <h2 className="film__info_title">{isFilm?.title}</h2>
              <p className="film__info_lang">{isFilm?.original_language}</p>
              <p className="film__info_overview">{isFilm?.overview}</p>
            </div>
            <div className="info__reviev">
              <h3 className="info__reviev_vote">{isFilm?.vote_average}</h3>
              <p className="info__reviev_voteCount">
                {isFilm?.vote_count} оценок
              </p>
              <div className="info__butt">
                <button className="votefilm">Оценить фильм</button>
              </div>
              <p className="info__reviev_scale">34 рецензии</p>
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
