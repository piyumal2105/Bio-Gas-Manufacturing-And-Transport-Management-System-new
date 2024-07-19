// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";

function UserLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/user/login",
        formData
      );
      response.data.customerId;
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Invalid email or password");
      } else {
        console.error("Error during sign in:", error);
      }
    }
  };

  return (
    <>
      <center>
        <br />
        <br />
        <br />
        <br />
        <Card
          style={{
            borderWidth: "2px",
            padding: "20px",
            height: "400px",
            width: "35%",
            textAlign: "left",
          }}
          className="shadow"
        >
          <p className="h3 text-center">User Login</p>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  placeholder="email@example.com"
                  value={formData.email}
                  name="email"
                  required
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  width: "100%",
                  borderColor: "black",
                  borderWidth: "2px",
                  backgroundColor: "#FFD800",
                  color: "black",
                }}
                className="mt-3"
              >
                Login
              </Button>
              <p className="mt-4">Don't have an account? Sign Up</p>
            </Form>
          </Card.Body>
        </Card>
      </center>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}

export default UserLogin;
