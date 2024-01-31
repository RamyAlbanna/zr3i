import { Button } from "react-bootstrap";
import axiosHttp from "../../../core/interceptor";

export default function Login() {
  const onLoggedIn = () => {
    localStorage.setItem("token", "token");
    localStorage.setItem("userRole", "employee");
    axiosHttp.get("https://fakestoreapi.com/products").then(
      (value) => {},
      () => {}
    );
  };

  return <Button onClick={onLoggedIn}>Login</Button>;
}
