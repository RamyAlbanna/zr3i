import Footer from "./footer";
import Header from "./header";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";

export default function PublicLayout() {
  return (
    <>
      <main className="co-auth-layout">


        <Outlet />


      </main >
    </>
  );
}
