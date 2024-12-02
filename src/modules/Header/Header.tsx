import { useState } from "react";
import "./Header.css";
import { getFilm } from "../../helper/getFilm";
import { useFilmsStore } from "../../Film/FilmStore";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const { addFilm, clearFilms } = useFilmsStore((state) => state.actions);
  const [films, setFilms] = useState([]);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();


  const onClick = async () => {
    const data = await getFilm(title);
    setFilms(data.results);
    clearFilms();
    addFilm(data.results);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const value = event.target.value;
    setTitle(value);
  };
  const onClickNaviggateRegistration = ()=>{
    navigate('/registration')
  }
  const onClickNavLogin = () => {
    navigate("/login");
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
          <button className="film-search_regbutton" onClick={onClickNavLogin}>
            Войти
          </button>
        </div>
        <button className="film-search_loginbutton" onClick={onClickNaviggateRegistration}>Регистрация</button>
      </div>
    </div>
  );
};
