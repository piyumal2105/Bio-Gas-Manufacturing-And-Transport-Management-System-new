// eslint-disable-next-line no-unused-vars
import React from "react";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./AdminDashboard.css";

function AdminDashboard() {
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
                      <Card.Title>Users</Card.Title>
                      <Card.Text>100</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="dashcard">
                    <Card.Body>
                      <Card.Title>Products</Card.Title>
                      <Card.Text>100</Card.Text>
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
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AdminDashboard;
