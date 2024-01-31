import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthGuard from "./core/auth/authGuard";
import "./App.scss";
import PublicLayout from "./layouts/public-layout/pages/public.layout";
import Home from "./layouts/public-layout/pages/home";
import Contact from "./layouts/public-layout/pages/contact";
import Login from "./layouts/public-layout/pages/login";
import NotFound from "./layouts/public-layout/pages/notFoundPage";
import SuperAdminLayout from "./layouts/superAdmin/pages/superAdmin.layout";
import Admin from "./layouts/superAdmin/pages/admin";
import { Toast, ToastContainer } from "react-bootstrap";
import { Subject } from "rxjs";
import { useEffect, useState } from "react";
import DesignElements from "./shared/designElements";
export const ERROR_MESSAGE$ = new Subject<string>();

export const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    ERROR_MESSAGE$.subscribe((value) => {
      setErrorMessage(value);
    });
  }, [errorMessage]);

  return (
    <>
      <ToastContainer position="top-end" style={{ padding: 30 }}>
        <Toast
          bg="danger"
          onClose={() => setErrorMessage("")}
          color="primary"
          show={errorMessage !== ""}
          className="text-white"
          autohide
        >
          <Toast.Body>{errorMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
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
