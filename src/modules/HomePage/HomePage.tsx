import { Film } from "../../Film/Film";
import "./HomePage.css";
import { useFilmsStore } from "../../Film/FilmStore";
import { Banner } from "../Banner/Banner";
import { useEffect, useState } from "react";
import { getTopRatedFilms } from "../../helper/getTopRated";
import { useNavigate } from "react-router-dom";

type HomePageProps = {
  Banner: React.ReactNode;
};

export const HomePage = () => {
  const films = useFilmsStore((state) => state.films);
  const { setCurrentFilm } = useFilmsStore((state) => state.actions);
  const [topFilms, setTopFilms] = useState<Film[]>([]);
  const navigate = useNavigate();

  const onClickFilmTitle = (id: string, film: Film) => {
    console.log(setCurrentFilm);
    setCurrentFilm(film);
    navigate(`/film/id=${id}`);
  };

  useEffect(() => {
    const getListFilm = async () => {
      const res = await getTopRatedFilms();
      const listFilm = res.results;
      setTopFilms(listFilm);
    };

    getListFilm();
  }, []);

  return (
    <div className="HomePage">
      <div className="HomePage_banner">
        <Banner />
      </div>
      <div className="film__list">
        {films.length == 0 &&
          topFilms.map((film, index) => (
            <div className="films_card top" key={index}>
              <h2>{index + 1}</h2>
              <div className="films_card_poster">
                <img
                  src={`https://image.tmdb.org/t/p/original/${film?.poster_path}`}
                  alt=""
                />
              </div>
              <div className="films_card_title">
                <div className="films_card__title">
                  <h2
                    onClick={() => {
                      const id = index.toString();
                      onClickFilmTitle(id, film);
                    }}
                  >
                    {film.title}
                  </h2>
                  <p>{film.release_date}</p>
                </div>
                <div className="films_card_description">
                  <p>{film.original_language}</p>
                  <div className="films_card_popularity">
                    <img src="src\img\star.png" alt="" />
                    {film.popularity}
                  </div>
                </div>
              </div>
            </div>
          ))}
        {films.length > 0 &&
          films.map((film, index) => (
            <div className="films_card" key={index}>
              <h2>{index + 1}</h2>
              <div className="films_card_poster">
                <img
                  src={`https://image.tmdb.org/t/p/original/${film?.poster_path}`}
                  alt=""
                />
              </div>
              <div className="films_card_title">
                <div className="films_card__title">
                  <h2
                    onClick={() => {
                      const id = index.toString();
                      onClickFilmTitle(id, film);
                    }}
                  >
                    {film.title}
                  </h2>
                  <p>{film.release_date}</p>
                </div>
                <div className="films_card_description">
                  <p>{film.original_language}</p>
                  <div className="films_card_popularity">
                    <img src="src\img\star.png" alt="" />
                    {film.popularity}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
