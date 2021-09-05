import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import $ from "jquery";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./NavBar.css";
import { FiSun, FiMoon } from "react-icons/fi";

const NavBar = props => {
   return (
      <Navbar
         collapseOnSelect
         expand="lg"
         bg={props.theme === "dark" ? "dark" : "light"}
         variant={props.theme === "dark" ? "dark" : "light"}
      >
         <Container>
            <Navbar.Brand>
               <Nav.Link eventKey="0" as={Link} to="/" className="navbar-link">
                  Mike Bocon
               </Nav.Link>
            </Navbar.Brand>
            <Nav.Item>
               <Button className="theme-btn" onClick={props.toggleTheme}>
                  {props.theme === "dark" ? <FiSun /> : <FiMoon />}
               </Button>
            </Nav.Item>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ml-auto">
                  <Nav.Link
                     eventKey="1"
                     as={Link}
                     to="/"
                     className="navbar-link home-link"
                  >
                     Home
                  </Nav.Link>
                  <Nav.Link
                     eventKey="2"
                     as={Link}
                     to="/resume"
                     className="navbar-link"
                  >
                     Resume
                  </Nav.Link>
                  <Nav.Link
                     eventKey="3"
                     as={Link}
                     to="/contact"
                     className="navbar-link"
                  >
                     Contact
                  </Nav.Link>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavBar;
