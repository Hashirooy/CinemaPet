import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import { SideBar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";

type LayoutProps = {
  Header: React.ReactNode;
  Footer: React.ReactNode;
};

export const Layout = ({ Header, Footer }: LayoutProps) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="layout">
      <div className="layout__header">{Header}</div>
      <div
        className={
          location.pathname === "/" ? "layout__main" : "layout__main-login"
        }
      >
        {location.pathname === "/" && <SideBar />}
        <Outlet />
      </div>
      <div className="layout__footer">{Footer}</div>
    </div>
  );
};
