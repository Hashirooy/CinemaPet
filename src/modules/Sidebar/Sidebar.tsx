import "./Sidebar.css";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sibebar-options">
        <div className="sibebar-options_element">
          <img src="src\img\home.svg" alt="" />
          <a href="">Главная</a>
        </div>
        <div className="sibebar-options_element">
          <img src="src\img\film.svg" alt="" />
          <a href="">Фильмы</a>
        </div>
        <div className="sibebar-options_element">
          <img src="src\img\play.svg" alt="" />
          <a href="">Сериалы</a>
        </div>
        <div className="sibebar-options_element">
          <img src="src\img\ball.svg" alt="" />
          <a href="">Спорт</a>
        </div>
        <div className="sibebar-options_element">
          <img src="src\img\tv.svg" alt="" />
          <a href="">Игры</a>
        </div>
        <div className="sibebar-options_element">
          <img src="src\img\media.svg" alt="" />
          <a href="">Медиа</a>
        </div>
        <div className="sibebar-options_element">
          <img src="src\img\serial.svg" alt="" />
          <a href="">Телеканалы</a>
        </div>
        <div className="sibebar-options_element">
          <img src="src\img\media.svg " alt="" />
          <a href="">Онлайн-кинотеатр</a>
        </div>
      </div>
    </div>
  );
};
