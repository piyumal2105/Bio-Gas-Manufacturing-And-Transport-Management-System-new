// eslint-disable-next-line no-unused-vars
import React from "react";
import "./LandingPage.css";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function LandingPage() {
  return (
    <>
      <div className="bg">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container style={{ color: "white" }}>
          <Row style={{ paddingLeft: "120px" }}>
            <Col style={{ fontSize: "35px" }}>
              <i>GREEN ENERGY </i>
              <br />
              <i style={{ paddingLeft: "90px" }}>For a</i>
              <br />
              <i style={{ paddingLeft: "50px" }}>BETTER TOMORROW</i>
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
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
