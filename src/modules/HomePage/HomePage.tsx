import { Film } from "../../Film/Film";
import "./HomePage.css";
import { useFilmsStore } from "../../Film/FilmStore";
import { Banner } from "../Banner/Banner";
import { useEffect, useState } from "react";
import { getTopRatedFilms } from "../../helper/getTopRated";

type HomePageProps = {
  Banner: React.ReactNode;
};

export const HomePage = () => {
  const films = useFilmsStore((state) => state.films);
  const [topFilms, setTopFilms] = useState<Film[]>([])
  useEffect(()=>{
    const getListFilm = async ()=>{
      const res = await getTopRatedFilms()
      const listFilm = res.results
      setTopFilms(listFilm)
    }

    getListFilm()
  },[])

  return (
    <div className="HomePage">
      <div className="HomePage_banner">
        <Banner />
      </div>
      <div className="film__list">
      {films.length == 0 &&
          topFilms.map((film, index) => (
            <div className="films_card-top" key={index}>
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
        {films.length > 0 &&
          films.map((film, index) => (
            <div className="films_card" key={index}>
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
