import React, { useContext } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.text}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
