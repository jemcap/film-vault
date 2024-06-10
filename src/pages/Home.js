import React from "react";
import { Container } from "react-bootstrap";
import ProductCarousel from "../components/ProductCarousel";
import PromoBar from "../components/PromoBar";

const Home = () => {
  return (
    <>
      <Container fluid>
        <PromoBar />
        <ProductCarousel />
      </Container>
    </>
  );
};

export default Home;
