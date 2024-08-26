// eslint-disable-next-line no-unused-vars
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <center>
        <div>
          <Navbar expand="lg" className="bg-transparent">
            <Container
              style={{
                fontSize: "18px",
                marginTop: "25px",
              }}
            >
              <Navbar.Brand
                href="/"
                style={{ color: "black", fontSize: "30px" }}
              >
                <b>
                  <i>Ceylon</i>
                  <i style={{ color: "#FFD800" }}>Biogass</i>
                </b>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="/" style={{ color: "black" }}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="/product" style={{ color: "black" }}>
                    Products
                  </Nav.Link>
                  <Nav.Link href="/about" style={{ color: "black" }}>
                    About Us
                  </Nav.Link>
                  <Nav.Link href="/contactus" style={{ color: "black" }}>
                    Contact Us
                  </Nav.Link>
                  <Nav.Link href="/user/login" style={{ color: "black" }}>
                    Sign In
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </center>
    </>
  );
}

export default Header;
