import React from "react";
import { Container } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";

const Home = () => {
  return (
    <>
      <Container fluid>
        <ProductCarousel />
      </Container>
    </>
  );
};

export default Home;
