import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard() {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to={"login"} />;
}
