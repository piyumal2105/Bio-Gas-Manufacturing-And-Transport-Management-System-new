// eslint-disable-next-line no-unused-vars
import React from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./AdminNavbar.css";

function AdminNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };
  return (
    <>
      <center>
        <div className="sidebar">
          <div className="sidebar-brand">
            <b>
              <i>CeylonBiogass</i>
            </b>
          </div>
          <Nav className="flex-column">
            <Nav.Link
              href="/dashboard"
              className="mt-3"
              style={{ color: "black", fontSize: "20px" }}
            >
              Dashboard
            </Nav.Link>
            <Nav.Link
              href="/customers"
              className="mt-3"
              style={{ color: "black", fontSize: "20px" }}
            >
              Customers
            </Nav.Link>
            <Nav.Link
              href="/inventory"
              className="mt-3"
              style={{ color: "black", fontSize: "20px" }}
            >
              Inventory
            </Nav.Link>
            <Nav.Link
              href="/orders"
              className="mt-3"
              style={{ color: "black", fontSize: "20px" }}
            >
              Orders
            </Nav.Link>
            <Nav.Link
              href="/laboratory"
              className="mt-3"
              style={{ color: "black", fontSize: "20px" }}
            >
              Laboratory
            </Nav.Link>
            <Nav.Link
              href="/employees"
              className="mt-3"
              style={{ color: "black", fontSize: "20px" }}
            >
              Employees
            </Nav.Link>
            <Nav.Link
              href="/suppliers"
              className="mt-3"
              style={{ color: "black", fontSize: "20px" }}
            >
              Suppliers
            </Nav.Link>
            <Button className="logout" variant="dark" onClick={logout}>
              Logout
            </Button>
          </Nav>
        </div>
      </center>
    </>
  );
}

export default AdminNavbar;
