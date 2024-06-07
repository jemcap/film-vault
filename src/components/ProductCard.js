import React, { useContext } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const cartContext = useContext(CartContext);
  const productQuantity = cartContext.getProductQuantity(product.id);
  console.log(cartContext.items);
  return (
    <Card className="mb-3 shadow">
      <Card.Body>
        <Card.Title className="mb-2">{product.text}</Card.Title>
        <Card.Text className="mb-3">
          <strong>Price:</strong> £{product.price.toFixed(2)}
        </Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row} className="align-items-center mb-3">
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6" className="d-flex justify-content-end">
                <Button
                  variant="secondary"
                  size="sm"
                  className="me-2"
                  onClick={() => cartContext.addOneToCart(product.id)}
                >
                  +
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="me-2"
                  onClick={() => cartContext.removeOneFromCart(product.id)}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              className="w-100"
              onClick={() => cartContext.deleteFromCart(product.id)}
            >
              Remove from Cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            className="w-100"
            onClick={() => cartContext.addOneToCart(product.id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
