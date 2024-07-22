// eslint-disable-next-line no-unused-vars
import React from "react";
import { Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate, useLocation } from "react-router-dom";
import "./AdminNavbar.css";
import {
  FaHome,
  FaUserAlt,
  FaCalendarCheck,
  FaPeopleCarry,
} from "react-icons/fa";
import { MdInventory2 } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { GrUserWorker } from "react-icons/gr";
import { TbLogout } from "react-icons/tb";

function AdminNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.clear();
    navigate("/admin/login");
  };

  return (
    <center>
      <div className="sidebar">
        <div className="sidebar-brand">
          <b>
            <i>CeylonBiogass</i>
          </b>
        </div>
        <Nav className="flex-column">
          <Nav.Link
            href="/admin/dashboard"
            className={`sidenavlink mt-3 ${
              location.pathname === "/admin/dashboard" ? "active" : ""
            }`}
            style={{ color: "black", fontSize: "20px" }}
          >
            <FaHome style={{ marginTop: "-4px", marginRight: "30px" }} />
            Dashboard
          </Nav.Link>
          <Nav.Link
            href="/allcustomer"
            className={`sidenavlink mt-3 ${
              location.pathname === "/allcustomer" ? "active" : ""
            }`}
            style={{ color: "black", fontSize: "20px" }}
          >
            <FaUserAlt style={{ marginTop: "-6px", marginRight: "30px" }} />
            Customers
          </Nav.Link>
          <Nav.Link
            href="/inventory"
            className={`sidenavlink mt-3 ${
              location.pathname === "/inventory" ? "active" : ""
            }`}
            style={{ color: "black", fontSize: "20px" }}
          >
            <MdInventory2 style={{ marginTop: "-4px", marginRight: "30px" }} />
            Inventory
          </Nav.Link>
          <Nav.Link
            href="/orders"
            className={`sidenavlink mt-3 ${
              location.pathname === "/orders" ? "active" : ""
            }`}
            style={{ color: "black", fontSize: "20px" }}
          >
            <FaCalendarCheck
              style={{ marginTop: "-7px", marginRight: "30px" }}
            />
            Orders
          </Nav.Link>
          <Nav.Link
            href="/laboratory"
            className={`sidenavlink mt-3 ${
              location.pathname === "/laboratory" ? "active" : ""
            }`}
            style={{ color: "black", fontSize: "20px" }}
          >
            <ImLab style={{ marginTop: "-5px", marginRight: "30px" }} />
            Laboratory
          </Nav.Link>
          <Nav.Link
            href="/employees"
            className={`sidenavlink mt-3 ${
              location.pathname === "/employees" ? "active" : ""
            }`}
            style={{ color: "black", fontSize: "20px" }}
          >
            <GrUserWorker style={{ marginTop: "-7px", marginRight: "30px" }} />
            Employees
          </Nav.Link>
          <Nav.Link
            href="/suppliers"
            className={`sidenavlink mt-3 ${
              location.pathname === "/suppliers" ? "active" : ""
            }`}
            style={{ color: "black", fontSize: "20px" }}
          >
            <FaPeopleCarry style={{ marginTop: "-4px", marginRight: "30px" }} />
            Suppliers
          </Nav.Link>
          <Button
            className="logout"
            onClick={logout}
            style={{ backgroundColor: "black", borderColor: "black" }}
          >
            Logout
            <TbLogout
              style={{
                fontSize: "25px",
                marginLeft: "20px",
              }}
            />
          </Button>
        </Nav>
      </div>
    </center>
  );
}

export default AdminNavbar;
