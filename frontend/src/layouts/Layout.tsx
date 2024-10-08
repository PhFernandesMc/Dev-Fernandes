import Header from "@/components/util/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
