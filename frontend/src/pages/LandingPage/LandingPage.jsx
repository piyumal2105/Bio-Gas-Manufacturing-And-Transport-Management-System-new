// eslint-disable-next-line no-unused-vars
import React from "react";
import "./LandingPage.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHotkeys } from "react-hotkeys-hook";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  useHotkeys("alt+a", () => {
    window.location.href = "/admin/login";
  });
  return (
    <>
      <div className="bg">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container style={{ color: "black", fontWeight: "unset" }}>
          <Row style={{ paddingLeft: "250px" }}>
            <Col style={{ fontSize: "35px" }}>
              <i className="line-1">GREEN ENERGY </i>
              <br />
              <i className="line-2" style={{ paddingLeft: "90px" }}>
                For a
              </i>
              <br />
              <i className="line-3" style={{ paddingLeft: "50px" }}>
                BETTER TOMORROW
              </i>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
