import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      expanded={expanded}
    >
      <div className="w-full flex justify-center">
        <div className="w-100 h-100 pl-10 lg:pl-20 sm:pl-5">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="src\IMAGES\LOGO.svg"
              width="30"
              height="30"
              className="d-inline-block align-top justify-between"
            />{" "}
            GAUTAM RAI
          </Navbar.Brand>
        </div>
        <div className="px-5 pr-2 h-100 flex-row">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleToggle}
          />
        </div>
      </div>
      <div className="px-5 pr-2 sm:pr-1 lg:pr-10">
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Projects</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CollapsibleExample;
