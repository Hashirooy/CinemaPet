import { useState } from "react";
import "./Header.css";
import { getFilm } from "../../helper/getFilm";
import { useFilmsStore } from "../../Film/FilmStore";

export const Header = () => {
  const { addFilm } = useFilmsStore((state) => state.actions);
  console.log(addFilm);
  const [films, setFilms] = useState([]);
  const [title, setTitle] = useState("");
  const onClick = async () => {
    const data = await getFilm(title);
    setFilms(data.results);
    addFilm(data.results);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);
  };
  return (
    <div className="header">
      <div className="header_logo">
        <img src="src\img\custom-logo.png" alt="" />
      </div>
      <form className="film-search">
        <input
          placeholder="Сериалы, кино ..."
          className="film-search_inut"
          type="text"
          value={title}
          onChange={onChange}
        />
        <div film-search_div_button onClick={onClick}>
          <img
            src="src\img\find-svgrepo-com.svg"
            className="film-search_button"
          ></img>
        </div>
      </form>
      <div className="header__account">
        <div>
          <button className="film-search_regbutton">Войти</button>
        </div>
        <button className="film-search_loginbutton">Регистрация</button>
      </div>
    </div>
  );
};
