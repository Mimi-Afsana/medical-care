import { signOut } from "@firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import CustomLink from "../../CustomLink/CustomLink";
import auth from "../../firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        // sticky="top"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className="d-flex align-items-center me-5 fw-bold" href="#home">
            MEDICAL CARE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ms-5">
              <Nav.Link className="text-white" as={CustomLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" as={CustomLink} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link className="text-white" as={CustomLink} to="/about">
                About
              </Nav.Link>

              <Nav.Link className="text-white" as={CustomLink} to="/contact">
                Contact Me
              </Nav.Link>

            </Nav>
            <p className="text-white me-4 mt-3">{user?.email}</p>
            <Nav className="bg-warning fw-bold rounded-pill px-3 d-inline-flex align-items-center">
              {user ? (
                <button
                  className="bg-warning fw-bold border-0 rounded-pill px-2 py-1 d-inline-block w-auto"
                  onClick={logout}
                >
                  Sign out
                </button>
              ) : (
                <Nav.Link
                  className="text-primary d-inline-block w-auto mx-4"
                  eventKey={2}
                  as={Link}
                  to="/login"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>



          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Header;
