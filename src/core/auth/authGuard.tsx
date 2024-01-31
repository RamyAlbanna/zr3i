import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard() {
  if (!localStorage.getItem("token")) {
    return <Navigate to={"login"} />;
  }

  const userRole = localStorage.getItem("userRole");
  switch (userRole) {
    case "admin":
      return <Outlet />;
  }
  return <Navigate to={"login"} />;
}
