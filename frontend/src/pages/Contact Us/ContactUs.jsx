// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ContactUs.css";

function ContactUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b92ea620-9a74-49ef-9a9f-fc90af498691");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
              <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="text" name="email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control
                    type="text"
                    name="message"
                    as="textarea"
                    rows={10}
                    required
                  />
                </Form.Group>
                <br />
                <center>
                  <Button
                    type="submit"
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
              </Form>

              <span>{result}</span>
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
