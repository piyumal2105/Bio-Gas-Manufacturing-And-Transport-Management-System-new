// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Customer.css";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import AdminNavbar from "../../components/AdminNavbar/AdminNavbar";

const Customer = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch user data from the API
    axios
      .get("http://localhost:3001/user/allusers")
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

  return (
    <>
      <AdminNavbar />
      <Container>
        <div className="content">
          <i>
            <h2 className="name">Customers</h2>
          </i>
          <div className="dashboard-content">
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <br />
            <br />
            <Container>
              <Table striped bordered hover className="table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((member) => (
                    <tr key={member.cusMemberID}>
                      <td>{member.firstName}</td>
                      <td>{member.lastName}</td>
                      <td>{member.email}</td>
                      <td>{member.number}</td>
                      <td>{member.address}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Customer;
