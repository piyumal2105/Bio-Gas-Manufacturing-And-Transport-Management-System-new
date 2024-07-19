// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import img01 from "../../assets/visamaster.png";

function Footer() {
  const socialMediaColors = {
    facebook: "black",
    instagram: "black",
    twitter: "black",
  };
  return (
    <>
      <footer style={{ backgroundColor: "#FFD800", padding: "30px" }}>
        <Container>
          <Row>
            <Col xs={12} md={6} lg={3} className="mb-3">
              <h5>Get To Know Us</h5>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#">FAQ</Nav.Link>
              <Nav.Link href="#">Our Story</Nav.Link>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-3">
              <h5>What We Do</h5>
              <Nav.Link href="#">Our Impact </Nav.Link>
              <Nav.Link href="#">How It Works</Nav.Link>
              <Nav.Link href="#">Terms & Conditions</Nav.Link>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-3">
              <h5>Payment Options</h5>
              <div>
                <img src={img01} alt="Visa" style={{ height: "35px" }} />
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-3">
              <h5>Follow Us On</h5>
              <div className="mt-3">
                <a
                  href="#"
                  style={{
                    marginRight: "10px",
                    color: socialMediaColors.facebook,
                  }}
                >
                  <FaFacebookSquare style={{ height: "30px", width: "30px" }} />
                </a>

                <a
                  href="#"
                  style={{
                    marginRight: "10px",
                    color: socialMediaColors.twitter,
                  }}
                >
                  <FaTwitterSquare style={{ height: "30px", width: "30px" }} />
                </a>
                {/* whatsapp */}
                <a href="#" style={{ color: socialMediaColors.twitter }}>
                  <FaWhatsappSquare style={{ height: "30px", width: "30px" }} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer
        style={{ backgroundColor: "black", color: "white", height: "70px" }}
      >
        <Container>
          <Row>
            <Col className="text-center mt-4">
              <p>
                &copy; {new Date().getFullYear()} All rights reserved
                CeylonBiogass
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
