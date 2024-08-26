// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ContactUs.css";

function ContactUs() {
  return (
    <>
      <Header />
      <Container>
        <div className="about-us">
          <i>
            <h2 className="mt-4 nameab">Contact Us</h2>
          </i>
        </div>
        <div className="mt-5">
          <Container>
            <div className="container">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={10} />
                </Form.Group>
              </Form>
              <br />
              <center>
                <Button
                  style={{
                    width: "20%",
                    borderColor: "black",
                    borderWidth: "2px",
                    backgroundColor: "#FFD800",
                    color: "black",
                  }}
                >
                  Submit
                </Button>
              </center>
            </div>
          </Container>
        </div>
        <br />
        <br />
        <br />
      </Container>
      <Footer />
    </>
  );
}

export default ContactUs;
