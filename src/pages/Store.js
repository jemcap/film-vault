import React from "react";
import { Row, Col } from "react-bootstrap";
import { productsArr } from "../context/productStore";
import ProductCard from "../components/ProductCard";
const Store = () => {
  return (
    <>
      <h1 align="center" className="p-3">
        Used Tech Products
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArr.map((product, index) => (
          <Col align="center" key={index}>
            {/* <img src={product.image} width={300} /> */}
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
