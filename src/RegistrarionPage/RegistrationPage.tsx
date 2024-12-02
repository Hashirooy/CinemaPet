import "./RegistrtionPage.css"

export const RegistrationPage = ()=>{
    return(<div className="registration">
        <form action="" className="registration__form">
            <div className="form__fields">
                <p>Имя</p>
                <input type="text" />
                <p>Фамилия</p>
                <input type="text" />
                <p>Логин</p>
                <input type="text" />
                <p>Пароль</p>
                <input type="text" />
                <p>Повторите пароль</p>
                <input type="text" />
                </div>
                <div className="form__butons">
                    <button className="film-search_regbutton">Зарегистрироваться</button>
                </div>
        </form>
    </div>)
}