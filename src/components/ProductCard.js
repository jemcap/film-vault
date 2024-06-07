import React, { useContext } from "react";
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const cartContext = useContext(CartContext);
  const productQuantity = cartContext.getProductQuantity(product.id);
  console.log(cartContext.items);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.text}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  className="mx-2"
                  onClick={() => cartContext.addOneToCart(product.id)}
                >
                  +
                </Button>
                <Button
                  sm="6"
                  className="mx-2"
                  onClick={() => cartContext.removeOneFromCart(product.id)}
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              className="my-2"
              onClick={() => cartContext.deleteFromCart(product.id)}
            >
              Remove from Cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cartContext.addOneToCart(product.id)}
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
