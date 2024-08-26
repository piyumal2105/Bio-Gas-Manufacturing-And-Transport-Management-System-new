// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./AboutUs.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img01 from "../../assets/vision.png";
import img02 from "../../assets/mission.jpg";
import img03 from "../../assets/miss.webp";
import img04 from "../../assets/whatwedo.webp";
import img05 from "../../assets/why.jpg";

function AboutUs() {
  return (
    <>
      <Header />
      <Container>
        <div className="about-us">
          <i>
            <h2 className="mt-4 nameab">About Us</h2>
          </i>
          <br />
          <p>
            At CeylonBiogass, we are pioneers in providing sustainable and
            efficient solutions in bio gas manufacturing and transport
            management. Our mission is to revolutionize the way energy is
            produced and distributed, focusing on eco-friendly practices and
            cutting-edge technology.
          </p>
          <br />
          <br />
          <div className="mt-5">
            <Container style={{marginLeft: "30px"}}>
              <Row>
                <Col>
                  <i>
                    <h4 className="mt-4 nameab">Our Vision</h4>
                  </i>
                  <p>
                    We envision a world where renewable energy sources dominate
                    the energy landscape, reducing the carbon footprint and
                    contributing to a cleaner and greener planet. Our goal is to
                    lead the charge in this transformation by offering reliable
                    bio gas solutions that cater to diverse energy needs.
                  </p>
                </Col>
                <Col>
                  <img
                    src={img01}
                    alt=""
                    style={{
                      borderRadius: "10px",
                      width: "500px",
                      height: "300px",
                    }}
                  />
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <i>
                    <h4 className="mt-4 nameab">Our Mission</h4>
                  </i>
                  <p>
                    Our mission is to innovate and deliver top-notch bio gas
                    manufacturing and transport management systems that ensure
                    optimal efficiency, safety, and environmental
                    sustainability. We are committed to helping communities,
                    industries, and governments transition to renewable energy
                    sources seamlessly.
                  </p>
                </Col>
                <Col>
                  <img
                    src={img03}
                    alt=""
                    style={{
                      borderRadius: "10px",
                      width: "500px",
                      height: "300px",
                    }}
                  />
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <i>
                    <h4 className="mt-4 nameab">What We Do</h4>
                  </i>
                  <h5>Bio Gas Manufacturing:</h5>
                  <p>
                    We specialize in the production of high-quality bio gas
                    through advanced anaerobic digestion processes. Our bio gas
                    plants are designed to convert organic waste into a valuable
                    energy resource, reducing waste disposal issues and
                    providing a renewable energy source.
                  </p>
                  <h5>Transport Management:</h5>
                  <p>
                    Efficient transport is key to our operations. We offer a
                    comprehensive transport management system that ensures the
                    safe and timely delivery of bio gas to our clients. Our
                    logistics network is optimized to minimize transportation
                    costs and carbon emissions.
                  </p>
                </Col>
                <Col>
                  <br />
                  <img
                    src={img04}
                    alt=""
                    style={{
                      borderRadius: "10px",
                      width: "500px",
                      height: "300px",
                    }}
                  />
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col>
                  <i>
                    <h4 className="mt-4 nameab">Why Choose Us?</h4>
                  </i>
                  <p>
                    <ul>
                      <li>
                        Innovation: We leverage the latest technology to develop
                        and maintain state-of-the-art bio gas manufacturing
                        facilities.
                      </li>
                      <li>
                        Sustainability: Our processes are designed with the
                        environment in mind, ensuring minimal impact on the
                        planet.
                      </li>
                      <li>
                        Efficiency: From production to delivery, our systems are
                        optimized for maximum efficiency and reliability.
                      </li>
                      <li>
                        Safety: We adhere to the highest safety standards in
                        both manufacturing and transportation, ensuring the
                        well-being of our employees, clients, and the
                        environment.
                      </li>
                    </ul>
                  </p>
                </Col>
                <Col>
                  <img
                    src={img05}
                    alt=""
                    style={{
                      borderRadius: "10px",
                      width: "500px",
                      height: "300px",
                    }}
                  />
                </Col>
              </Row>
              <br />
              <br />
            </Container>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default AboutUs;
