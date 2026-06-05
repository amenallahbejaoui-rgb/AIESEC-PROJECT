import { useEffect, useState } from "react";
import aieseclogo from "../Assets/Images/aiesec.png";
import "../Assets/Scss/Navbar.scss";
import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Navigationbar(props) {
  const [navColor, setNavColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };
  useEffect(() => {
    const isDesktop = window.innerWidth >= 800;
    if (isDesktop && props.navbarC) {
      window.addEventListener("scroll", changeNavbarColor);
    } else {
      setNavColor(true);
    }
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, [props.navbarC]);

  return (
    <>
      <Navbar
        data-bs-theme="dark"
        expand="md"
        className={
          navColor ? "navbarC  colorChange sticky-top" : "navbarC  sticky-top"
        }
      >
        <Navbar.Brand href="/">
          <img src={aieseclogo} className="aieseclogo" alt="aieseclogo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={navColor ? "colorChange" : ""}
        >
          <Nav className="ml-auto w-100 justify-content-between">
            <NavDropdown
              title="Go abroad"
              id="basic-nav-dropdown"
              className="menu-item-dropdown"
            >
              <NavDropdown.Item href="/gv">Global Volunteer</NavDropdown.Item>
              <NavDropdown.Item href="/gta">Global Talent</NavDropdown.Item>
              <NavDropdown.Item href="/gte">Global Teacher</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="/aboutus"
              className={navColor ? "colorChange2 menu-item" : "menu-item"}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="/membership"
              className={navColor ? "colorChange2 menu-item" : "menu-item"}
            >
              Membership
            </Nav.Link>
            <Nav.Link
              href="/events"
              className={navColor ? "colorChange2 menu-item" : "menu-item"}
            >
              Events
            </Nav.Link>
            <Nav.Link
              href="/blogs"
              className={navColor ? "colorChange2 menu-item" : "menu-item"}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              href="/contact"
              className={
                navColor
                  ? "d-block d-sm-none colorChange2 menu-item"
                  : "menu-item d-block d-sm-none"
              }
            >
              Contact us
            </Nav.Link>
            <Nav.Link
              href="https://auth.aiesec.org/users/sign_in?country=Tunisia/"
              className={
                navColor
                  ? "d-block d-sm-none colorChange2 menu-item"
                  : "menu-item d-block d-sm-none"
              }
            >
              Apply Now
            </Nav.Link>
            <Button
              href="/contact"
              className={
                navColor
                  ? "d-none d-sm-block colorChange2 rounded-pill contact btn-light contact-S"
                  : "d-none d-sm-block rounded-pill contact btn-light"
              }
            >
              Contact us
            </Button>
            <Button
              href="https://auth.aiesec.org/users/sign_in?country=Tunisia/"
              className="d-none d-sm-block rounded-pill white apply"
            >
              Apply Now
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Row className={navColor ? "navbarC colorChange" : "navbarC"}>
        <Col md={1}>
          <a href="/">
            <img src={aieseclogo} className="aieseclogo" alt="aieseclogo.png" />
          </a>
        </Col>
        <Col
          md={{ offset: 1 }}
          className="menu-item"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <Dropdown show={showDropdown}>
            <Dropdown.Toggle
              className={navColor ? "colorChange2" : ""}
              style={{ background: "none", border: "none" }}
              id="dropdown-basic"
            >
              Go abroad
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/gv">Global Volunteer</Dropdown.Item>
              <Dropdown.Item href="/gta">Global Talent</Dropdown.Item>
              <Dropdown.Item href="/gte">Global Teacher</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Button variant="link" href="/aboutus">
            About Us
          </Button>
        </Col>
        <Col>
          <Button variant="link" href="/membership">
            Membership
          </Button>
        </Col>
        <Col>
          <Button variant="link" href="/events">
            Events
          </Button>
        </Col>
        <Col>
          <Button variant="link" href="/blogs">
            Blog
          </Button>
        </Col>
        
        <Col md={1} className="apply">
          <Button
            style={{ height: "fit-content", marginTop: "3px" }}
            className={
              navColor
                ? "rounded-pill contact btn-light contact-S"
                : "rounded-pill contact btn-light"
            }
            href="/contact"
          >
            Contact us
          </Button>
        </Col>
        <Col md={2} className="apply menu-item">
          <Button
            href="https://https://auth.aiesec.org/users/sign_in?country=Tunisia/"
            style={{ height: "fit-content" }}
            className="rounded-pill white"
          >
            Apply Now
          </Button>
        </Col>
      </Row> */}
    </>
  );
}
export default Navigationbar;
