import React from "react";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <hr />
      <div className="container">
        <div
          style={{
            columnCount: "2",
            width: "100%",
            padding: "20px",
          }}
        >
          <div>
            <h4>Get new themes in your inbox!</h4>
            <p>New themes or big discounts. Never spam.</p>
          </div>
          <div
            className="ui icon input"
            style={{ border: "0px", float: "right" }}
          >
            <input
              className="prompt"
              type="text"
              placeholder="Email address "
              style={{
                backgroundColor: "#f9f9f9",
              }}
            />
            <button className="ui violet button" style={{ float: "right" }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr />

      <div className="container">
        <div>
          <Nav>
            <Nav.Link href="#">Help Center</Nav.Link>
            <Nav.Link href="#">Terms of Service</Nav.Link>
            <Nav.Link href="#">Licenses</Nav.Link>
            <Nav.Link href="#">Sell Themes</Nav.Link>
            <div
              style={{ position: "relative", left: "100px", margin: "auto" }}
            >
              <p>
                Trying to redownload a theme? Use our
                <a href="#"> redownload page.</a>
              </p>
            </div>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
