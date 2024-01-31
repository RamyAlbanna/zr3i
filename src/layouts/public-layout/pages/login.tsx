import { Button } from "react-bootstrap";

export default function Login() {
  const onLoggedIn = () => {
    localStorage.setItem("token", "token");
    localStorage.setItem("userRole", "employee");
  };

  return <Button onClick={onLoggedIn}>Login</Button>;
}
