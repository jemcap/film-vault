import React, { useState } from "react";
import logo from "../assets/TechVault_transparent.png";
import { Navbar, Container, Button, Modal } from "react-bootstrap";

const NavbarComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">
          <img src={logo} width={150} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShowModal}>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal</Modal.Body>
      </Modal>
    </>
  );
};

export default NavbarComponent;
