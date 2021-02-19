import React from "react";
import { Button } from "react-bootstrap";

const BuildAnything = () => {
  return (
    <div className="contt">
      <img src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png" />
      <h1
        className="display-3 text-bold"
        style={{ fontWeight: "1000", fontSize: "80px" }}
      >
        Build anything
      </h1>
      <h5 className="text-gray-soft text-regular">
        Themes built by or reviewed by Bootstrap's creators.
      </h5>
      <Button
        variant="primary"
        size="lg"
        style={{ backgroundColor: "#7a52b3", margin: "20px" }}
        active
      >
        Why our Themes?
      </Button>{" "}
    </div>
  );
};

export default BuildAnything;
