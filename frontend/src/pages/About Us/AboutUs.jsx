// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./AboutUs.css";
import { Container } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <Header />
      <Container>
        <div className="about-us">
          <i>
            <h2 className="mt-4 nameab">About Us</h2>
          </i>
          <div className="mt-5">
            <Container>
              
            </Container>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;
