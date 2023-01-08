import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import React, { useState } from "react";
function NavbarDash() {
  const history = useHistory();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
      console.log(error);
    }
  }
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          {currentUser.email.split("@")[0].toUpperCase()}
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">LEARN</Nav.Link>
          <Nav.Link href="#link">BLOG</Nav.Link>
          <Nav.Link href="#link">BOOKMARKS</Nav.Link>
          <Nav.Link href="#link">UI KIT</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button
              variant="link"
              onClick={handleLogout}
              style={{ textAlign: "right" }}
            >
              Log Out
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDash;
