import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function PrivateLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
