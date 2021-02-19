import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          marginBottom: "-10px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <Navbar.Brand href="#" style={{ fontSize: "16px", fontWeight: "500" }}>
          Bootstrap Themes
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ border: "0px" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">
                Admin &amp; Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                Landing &amp; Corporate
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Application</NavDropdown.Item>
              <NavDropdown.Item href="/">
                E-Comerce &amp; Retail
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Portfolio &amp; Blog</NavDropdown.Item>
              <NavDropdown.Item href="/">Speciality</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Why Our Themes?</Nav.Link>
            <Nav.Link href="#">The Guide</Nav.Link>
          </Nav>
          <NavDropdown.Divider />
          <Nav>
            <SearchBar />
            <Nav style={{ zIndex: "100", backgroundColor: "white" }}>
              <Nav.Link href="#">Sign in</Nav.Link>
              <Nav.Link href="#">Sign up</Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <NavDropdown.Divider />
    </div>
  );
};

export default NavBar;
