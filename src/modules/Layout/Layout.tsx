import { Outlet, Routes } from "react-router-dom";
import "./Layout.css";

type LayoutProps = {
  Header: React.ReactNode;
  Main?: React.ReactNode;
};

export const Layout = ({ Header }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="layout__header">{Header}</div>
      <div className="layout__main">
        <Outlet />
      </div>
    </div>
  );
};
