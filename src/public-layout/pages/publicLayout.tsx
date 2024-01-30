import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import { Container } from "react-bootstrap";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}
