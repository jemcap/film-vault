import React from "react";
import logo from "../assets/TechVault_transparent.png";
import { Navbar, Container, Button, Modal } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="sm">
      <Navbar.Brand href="/">
        <img src={logo} width={150} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button>Cart 0 Items</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
