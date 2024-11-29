import { Outlet } from "react-router-dom";
import "./Layout.css";
import { SideBar } from "../Sidebar/Sidebar";

type LayoutProps = {
  Header: React.ReactNode;
  Footer: React.ReactNode;
};

export const Layout = ({ Header, Footer }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="layout__header">{Header}</div>
      <div className="layout__main">
        <SideBar/>
        <Outlet />
      </div>
      <div className="layout__footer">{Footer}</div>
    </div>
  );
};
