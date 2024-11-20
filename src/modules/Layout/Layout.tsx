import { Outlet } from "react-router-dom";
import "./Layout.css";

type LayoutProps = {
  Header: React.ReactNode;
  Footer: React.ReactNode;
};

export const Layout = ({ Header, Footer }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="layout__header">{Header}</div>
      <div className="layout__main">
        <Outlet />
      </div>
      <div className="layout__footer">{Footer}</div>
    </div>
  );
};
