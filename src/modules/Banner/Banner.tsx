import { useEffect } from "react";
import "./Banner.css";
import { getTopRatedFilms } from "../../helper/getTopRated";

export const Banner = () => {
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
    return data;
  };
  useEffect(() => {
    const data = getTopRatedFilms();
  }, []);
  return (
    <div className="banner">
      <div className="banner_description">
        <h1></h1>
        <p></p>
      </div>
      <div className="banner_options">
        <h2>Уже в подписке</h2>
        <button>Смотреть</button>
        <div>
          <button>
            <img src="" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
