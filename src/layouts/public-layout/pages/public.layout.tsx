import { Outlet } from "react-router";

export default function PublicLayout() {
  return (
    <>
      <main className="co-public-layout">

        <Outlet />

      </main >
    </>
  );
}
