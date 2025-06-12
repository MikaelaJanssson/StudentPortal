import { Link } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";

function Navbar() {
  return (
    /*Bootstrap Navbar med darkmode, toggle, länkar */
    <BSNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          StudentPortal
        </BSNavbar.Brand>
        <BSNavbar.Toggle />
        <BSNavbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Startsida
            </Nav.Link>
            <Nav.Link as={Link} to="/courses">
              Kurser
            </Nav.Link>
            <Nav.Link as={Link} to="/my-courses">
              Mina kurser
            </Nav.Link>

            <Nav.Link as={Link} to="/news">
              Nyheter
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
