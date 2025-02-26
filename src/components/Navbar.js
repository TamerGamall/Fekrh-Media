import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/Navbar.css"
import logo from "../assets/fekrh.png"; 

const MyNavbar = () => (
    <Navbar expand="lg" className="custom-navbar">
        <Container>
            
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                <img src={logo} alt="Company Logo" className="logo" />
                <span className="brand-name">Fekrh Media</span>
            </Navbar.Brand>

            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    {/* <Nav.Link as={Link} to="/Projects">Projects</Nav.Link> */}
                    <Nav.Link as={Link} to="/OurClients">Our Clients</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default MyNavbar;
