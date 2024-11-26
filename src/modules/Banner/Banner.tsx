import { useEffect, useState } from "react";
import "./Banner.css";
import { getTopRatedFilms } from "../../helper/getTopRated";
import { Film } from "../../Film/Film";

export const Banner = () => {
  const [film, setFilm] = useState<Film>();
  const getTopRatedFilms = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzJlMDFlZTVkNWI3OTExNzQ2YTA0NmYwYTM2NjhmMCIsIm5iZiI6MTczMjEyNTI4Ni4zNzczNDM3LCJzdWIiOiI2NzMwZTM3ZGFjOTcwYWFkMmE4ZGEwYjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.afXTVLljiUuDbT9qToFizxrB5y81hK7pZ0tE1cu18Js",
      },
    };
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    );

    const data = await res.json();
    setFilm((prev) => ({
      ...prev,
      ...data.results[Math.floor(Math.random() * 11)],
    }));
  };
  useEffect(() => {
    const data = getTopRatedFilms();
    console.log(film);
  }, []);
  return (
    <div className="banner">
      <div className="banner_title">{film?.title}</div>
      <div className="banner_description">
        <p>{film?.overview}</p>
      </div>
      <div className="banner_options">
        <h2>Уже в подписке</h2>
        <div className="banner_options__buttons">
          <button className="banner_watchButt">Смотреть</button>
          <button className="banner_addWishListBanner">
            <img src="src\img\basic-ui-computer-27-svgrepo-com.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
