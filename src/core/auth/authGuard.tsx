import { Navigate, Outlet } from "react-router-dom";
import { RolesEnum } from "../enums/roles.enum";

export default function AuthGuard() {
  if (!localStorage.getItem("token")) {
    return <Navigate to={"login"} />;
  }

  const userRole = localStorage.getItem("role");
  switch (userRole) {
    case RolesEnum.superAdmin:
      return <Outlet />;
  }
  return <Navigate to={"login"} />;
}
