import { useNavigate } from "react-router-dom";
import axiosHttp from "../../../../core/interceptor";

export default function CreateUser() {
  const navigate = useNavigate();

  const onUserCreated = () => {
    const userToAdd = {
      name: "ramy elbanna",
      email: "ramyalbanna12@gmail.colm",
      phone: "01033842262",
    };

    axiosHttp
      .post("users", userToAdd)
      .then((response) => {
        navigate("/users");
      })
      .catch(() => {});
  };

  return (
    <>
      <button onClick={onUserCreated}>Create User</button>
    </>
  );
}
