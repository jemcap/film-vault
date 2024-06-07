import React from "react";
import { Row, Col } from "react-bootstrap";
import { productsArr } from "../context/productStore";
const Store = () => {
  return (
    <>
      <h1 align="center" className="mb-2">
        Used Tech Products
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArr.map((product) => (
          <Col align="center">
            {/* <img src={product.image} width={300} /> */}
            <h1>{product.text}</h1>
            <p>{product.price}</p>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
