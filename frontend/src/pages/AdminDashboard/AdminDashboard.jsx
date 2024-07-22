// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3001/user/allusers")
      .then((response) => {
        setUserCount(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/product/getAllProducts")
      .then((response) => {
        setProductCount(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <AdminNavbar />
      <Container>
        <div className="content">
          <i>
            <h2 className="name">Dashboard</h2>
          </i>

          <div className="dashboard-content">
            <input type="text" placeholder="Search..." className="search-bar" />
            <Container>
              <Row>
                <Col>
                  <Card className="dashcard">
                    <Card.Body>
                      <Card.Title>Customers</Card.Title>
                      <Card.Text>{userCount}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="dashcard">
                    <Card.Body>
                      <Card.Title>Products</Card.Title>
                      <Card.Text>{productCount}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="dashcard">
                    <Card.Body>
                      <Card.Title>Orders</Card.Title>
                      <Card.Text>100</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card className="dashcard">
                    <Card.Body>
                      <Card.Title>Employees</Card.Title>
                      <Card.Text>100</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="dashcard">
                    <Card.Body>
                      <Card.Title>Sellers</Card.Title>
                      <Card.Text>100</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AdminDashboard;
