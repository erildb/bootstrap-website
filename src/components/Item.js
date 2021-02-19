import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Item.css";
import stars from "./stars.jpg";

const Item = ({ title, description, url, price }) => {
  return (
    <div style={{ padding: "10px" }}>
      <Card style={{ width: "37rem", border: "0px" }}>
        <Card.Img variant="top" className="item-image" src={url}></Card.Img>
        <Button variant="primary" className="item-button">
          Live preview
        </Button>
        <Card.Body>
          <div
            style={{
              columnCount: "2",
              width: "100%",
            }}
          >
            <div>
              <h6>{title}</h6>
              <p>{description}</p>
            </div>
            <div
              style={{
                position: "relative",
                float: "right",
              }}
            >
              <p style={{ width: "100px", left: "50px", position: "relative" }}>
                {" "}
                {price}
              </p>
              <img
                src={stars}
                style={{ width: "100px", top: "-10px", position: "relative" }}
              ></img>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
