import { useEffect, useState } from "react";
import "./LoginPage.css";
interface credential {
  email: string;
  password: string;
}

interface checks {
  isEmpty: boolean;
  minLength: number;
}

// const useValidation = (value: string, validators: {}) => {
//   const [isEmpty, setIsEmtty] = useState(false);
//   useEffect(() => {
//     for (const validation in validators) {
//       switch (validation) {
//         case "isEmty":
//           value ? setIsEmtty(false) : setIsEmtty(true);
//           break;
//       }
//     }
//   }, [value]);

//   return { isEmpty };
// };

// const useInput = (initialValue: string, validations: {}) => {
//   const [value, setValue] = useState(initialValue);
//   const [isDerty, setIsDerty] = useState(false);
//   const valid: any = useValidation(value, validations);
//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(e.target.value);
//   };

//   const onBlur = () => {
//     setIsDerty(true);
//   };

//   return {
//     value,
//     onChange,
//     onBlur,
//     ...valid,
//     isDerty,
//   };
// };

export const LoginPage = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [credential, setCredential] = useState<credential>({
    email: "",
    password: "",
  });
  const onChange = (values: Partial<credential>) => {
    setCredential((prev) => ({ ...prev, ...values }));
  };

  const onClick = () => {
    validation();
  };

  const validation = () => {
    const emailField = validator(credential.email, {
      isEmpty: true,
      minLength: 3,
    });
    const passwordField = validator(credential.password, {
      isEmpty: true,
      minLength: 3,
    });
    if (emailField) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    if (passwordField) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  };

  const validator = (value: any, validations: checks): boolean | undefined => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          return value.length || value.length > 0 ? false : true;

        case "minLength":
          return value.length < validations[validation] ? true : false;
      }
    }
  };

  // const email = useInput("", { isEmty: true });
  // const password = useInput("", { isEmty: true });
  return (
    <div className="loginPage">
      <div className="login_form">
        <form action="" className="login_form_reg">
          <p className="login_title">Логин</p>
          {isEmailValid && (
            <div>
              <p>Пустое поле</p>
            </div>
          )}
          <input
            value={credential.email}
            type="text"
            onChange={(e) => {
              onChange({ email: e.target.value });
            }}
            className="login_form_login"
          />
          <p className="login_title">Пароль</p>
          {isPasswordValid && (
            <div>
              <p>Пустое поле</p>
            </div>
          )}
          <input
            value={credential.password}
            type="text"
            onChange={(e) => {
              onChange({ password: e.target.value });
            }}
            className="login_form_password"
          />
        </form>
        <div className="form__buttons">
          <button className="film-search_regbutton" onClick={onClick}>
            Войти
          </button>

          <button className="film-search_loginbutton">Регистрация</button>
        </div>
      </div>
    </div>
  );
};
