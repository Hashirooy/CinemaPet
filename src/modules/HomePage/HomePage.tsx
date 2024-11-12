import { useState } from "react";
import { Film } from "../../Film/Film";
import "./HomePage.css";
import { useFilmsStore } from "../../Film/FilmStore";

type HomePageProps = {
  films: Film[];
};

export const HomePage = () => {
  const films = useFilmsStore((state) => state.films);
  const [isEmpty, setisEmpty] = useState(true);
  return (
    <div className="HomePage">
      <div className="film__list">
        {isEmpty == false &&
          films.map((film) => (
            <div className="films_card">
              <div className="films_card_poster">
                <img src="" alt="" />
              </div>
              <div className="films_card_description">
                <div className="films_card_title">
                  <h2>{film.title}</h2>
                  <p>{film.release_date}</p>
                  <div className="films_card_popularity">{film.popularity}</div>
                </div>
                <div className="films_card_description">
                  <p>{film.overview}</p>
                  <p>{film.original_language}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
