import { Button } from "react-bootstrap";
import axiosHttp from "../../../core/interceptor";

export const Login = () => {
  const onLoggedIn = () => {
    localStorage.setItem("token", "token");
    localStorage.setItem("userRole", "admin");
    axiosHttp.get("https://fakestoreapi.com/products").then(
      (value) => {},
      () => {}
    );
  };

  return <Button onClick={onLoggedIn}>Login</Button>;
};
