import "./App.css";
import { Layout } from "./modules/Layout/Layout";
import { Header } from "./modules/Header/Header";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./modules/HomePage/HomePage";
import { LoginPage } from "./modules/LoginPage/LoginPage";
import { Footer } from "./Footer/Footer";
import { Banner } from "./modules/Banner/Banner";
import { RegistrationPage } from "./RegistrarionPage/RegistrationPage";
import { FilmPage } from "./FilmPage/FilmPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout Header={<Header />} Footer={<Footer />} />}
      >
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />} index></Route>
        <Route path="/registration" element={<RegistrationPage/>}></Route>
        <Route path="/film/:id" element={<FilmPage/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
