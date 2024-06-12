import React from "react";
import Card from "react-bootstrap/Card";
import "./CameraBanner.css";
import FilmCameraShelf from "../assets/2d3be849-93eb-4458-9e5d-e57546016b8f.jpeg";

const CameraBanner = () => {
  return (
    <Card className="text-white my-5">
      <Card.Img src={FilmCameraShelf} alt="Card image" id="camera-banner" />
      <Card.ImgOverlay>
        <Card.Title className="banner-title">
          Rare Film Cameras sold here!
        </Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CameraBanner;
