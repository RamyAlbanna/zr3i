import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import "../superAdmin.layout.scss";
import Sidebar from "./sidebar";

export default function SuperAdminLayout() {
  return (
    <>
      <Header />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
