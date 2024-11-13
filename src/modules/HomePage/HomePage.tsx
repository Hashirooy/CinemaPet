import { useState } from "react";
import { Film } from "../../Film/Film";
import "./HomePage.css";
import { useFilmsStore } from "../../Film/FilmStore";

type HomePageProps = {
  films: Film[];
};

export const HomePage = () => {
  const films = useFilmsStore((state) => state.films);

  return (
    <div className="HomePage">
      <div className="film__list">
        {films.length > 0 &&
          films.map((film) => (
            <div className="films_card">
              <div className="films_card_poster">
                <img src="src\img\52.webp" alt="" />
              </div>
              <div className="films_card_description">
                <div className="films_card_title">
                  <h2>{film.title}</h2>
                  <p>{film.release_date}</p>
                  <div className="films_card_popularity">{film.popularity}</div>
                </div>
                <div className="films_card_description">
                  <p>{film.original_language}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
