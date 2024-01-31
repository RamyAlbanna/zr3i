import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthGuard from "./core/auth/authGuard";
import "./App.scss";
import PublicLayout from "./layouts/public-layout/pages/public.layout";
import Home from "./layouts/public-layout/pages/home";
import Contact from "./layouts/public-layout/pages/contact";
import { Login } from "./layouts/public-layout/pages/login";
import NotFound from "./layouts/public-layout/pages/notFoundPage";
import SuperAdminLayout from "./layouts/superAdmin/pages/superAdmin.layout";
import Admin from "./layouts/superAdmin/pages/admin";
import DesignElements from "./shared/designElements";
import Toaster from "./shared/components/toaster";
import LoadingSpinner from "./shared/components/spinner";

export const App = () => {
  return (
    <>
      <Toaster />
      <LoadingSpinner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="design-elements" element={<DesignElements />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={AuthGuard()}>
            <Route path="/admin" element={<SuperAdminLayout />}>
              <Route index element={<Admin />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
