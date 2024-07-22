// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Product.css";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Product() {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [memberData, setMemberData] = useState([]);
  useEffect(() => {
    // Fetch user data from the API
    axios
      .get("http://localhost:3001/product/getAllProducts")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter user data based on the search term
  const filteredData = userData.filter((user) =>
    Object.values(user).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleNameClick = (product) => {
    setMemberData(product);
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <i>
            <h2 className="mt-4 name">Products</h2>
          </i>
          <div className="dashboard-content">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <Container>
              <div style={{ margin: "20px", padding: "20px" }}>
                <Row xs={1} md={3} className="g-5" style={{ padding: "20px" }}>
                  {filteredData.map((product) => (
                    <Col key={product.cusMemberID}>
                      <Card
                        style={{
                          padding: "15px",
                        }}
                      >
                        <Card.Body>
                          <Card.Img
                            variant="top"
                            src={product.productImage}
                            style={{
                              width: "100%",
                              height: "230px",
                              borderRadius: "10px",
                            }}
                          />
                          <br />
                          <br />
                          <Card.Title style={{ textAlign: "left" }}>
                            {product.name}
                          </Card.Title>
                          <Card.Subtitle
                            className="mt-3"
                            style={{ textAlign: "left" }}
                          >
                            {product.description}
                          </Card.Subtitle>
                          <Card.Subtitle
                            className="mt-3"
                            style={{ textAlign: "left" }}
                          >
                            <strong>Rs. {product.sellingPrice}.00</strong>
                          </Card.Subtitle>
                          <center>
                            <Button
                              className="mt-4"
                              onClick={() => handleNameClick(product)}
                              style={{
                                borderColor: "black",
                                borderWidth: "2px",
                                backgroundColor: "#FFD800",
                                color: "black",
                              }}
                            >
                              See More
                            </Button>
                          </center>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Container>
            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              centered
              // size="lg"
            >
              <Modal.Header closeButton>
                <Modal.Title>Product Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="text-center">
                  <br />
                  {memberData.productImage && (
                    <img
                      src={memberData.productImage}
                      style={{
                        width: "400px",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    />
                  )}
                  <br />
                  <br />
                </div>
                <hr />
                <br />
                <div>
                  <p>
                    <strong>Product Name: </strong> {memberData.name}
                  </p>
                  <p>
                    <strong>Product Description: </strong>{" "}
                    {memberData.description}
                  </p>

                  <p>
                    <strong>Price: </strong> Rs. {memberData.sellingPrice}.00
                  </p>
                  <p>
                    <strong>Available Stokes: </strong> {memberData.quantity}{" "}
                    Items Available
                  </p>
                </div>

                <br />
                <center>
                  <Row>
                    <Col>
                      <Button
                        style={{
                          width: "100%",
                          borderColor: "black",
                          borderWidth: "2px",
                          backgroundColor: "#FFD800",
                          color: "black",
                        }}
                      >
                        Buy Now
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        style={{
                          width: "100%",
                          borderColor: "black",
                          borderWidth: "2px",
                          backgroundColor: "#FFD800",
                          color: "black",
                        }}
                      >
                        Add to cart
                      </Button>
                    </Col>
                  </Row>
                </center>
                <br />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Product;
