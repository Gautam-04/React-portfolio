import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="custom-navbar"
      expanded={expanded}
    >
      <div className="container">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="IMAGES\LOGO.svg"
            width="30"
            height="30"
            className="navbar-brand-img"
          />{" "}
          <span className="navbar-brand-text hover:text-white">GAUTAM RAI</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CustomNavbar;
