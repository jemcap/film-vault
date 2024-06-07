import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <>
      <Container>
        <NavbarComponent />
        <BrowserRouter>
          <Routes>
            <Route path="/"></Route>
            <Route path="success"></Route>
            <Route path="cancel"></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
