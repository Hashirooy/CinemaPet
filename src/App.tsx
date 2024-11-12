import "./App.css";
import { Layout } from "./modules/Layout/Layout";
import { Header } from "./modules/Header/Header";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./modules/HomePage/HomePage";
import { LoginPage } from "./modules/LoginPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout Header={<Header />} />}>
        <Route path="/" element={<HomePage />} index></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
