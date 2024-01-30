import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import PublicLayout from "./public-layout/pages/publicLayout";
import Home from "./public-layout/pages/home";
import Contact from "./public-layout/pages/contact";
import NotFound from "./public-layout/pages/notFoundPage";
import PrivateLayout from "./private-layout/pages/privateLayout";
import Admin from "./private-layout/pages/admin";
import Users from "./private-layout/pages/users";
import AddUser from "./private-layout/pages/addUser";
import Login from "./public-layout/pages/login";
import AuthGuard from "./auth/authGuard";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AuthGuard />}>
          <Route path="/admin" element={<PrivateLayout />}>
            <Route index element={<Admin />} />
            <Route path="users" element={<Users />}>
              <Route path="add-user" element={<AddUser />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
