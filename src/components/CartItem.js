import React, { useContext } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { getProductData } from "../context/productStore";

const CartItem = ({ product }) => {
  const cartContext = useContext(CartContext);
  const id = product.id;
  const quantity = product.quantity;
  const productData = getProductData(id);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Row>
          <Col md={8}>
            <Card.Title>{productData.text}</Card.Title>
            <Card.Text>Quantity: {quantity}</Card.Text>
            <Card.Text>
              Total: £{(quantity * productData.price).toFixed(2)}
            </Card.Text>
          </Col>
          <Col md={4} className="d-flex align-items-center justify-content-end">
            <Button
              variant="danger"
              size="sm"
              onClick={() => cartContext.deleteFromCart(id)}
            >
              Remove
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
