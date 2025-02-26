import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTelegramPlane, FaBehance } from "react-icons/fa";
import "../CSS/Footer.css";
import data from "../data";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="text-center text-md-start">

                    <Col md={4}>
                        <h4 className="footer-logo">Fekrh Media</h4>
                        <p>We help you grow your business through innovative marketing solutions.</p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">Who we are ?</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Contact Us</h5>
                        <p>📍 {data.ContactUS.Adresss}</p>
                        <p>📞 {data.ContactUS.companyNumper}</p>
                        <p>📧 {data.ContactUS.companyMail}</p>
                        <div className="social-icons-Footer">
                            <a href={data.Social.facebook} className="Footericon facebook"><FaFacebookF /></a>
                            <a href={data.Social.x} className="Footericon twitter"><FaTwitter /></a>
                            <a href={data.Social.instagram} className="Footericon instagram"><FaInstagram /></a>
                            <a href={data.Social.youtube} className="Footericon youtube"><FaYoutube /></a>
                            <a href={data.Social.telegram} className="Footericon telegram"><FaTelegramPlane /></a>
                            <a href={data.Social.behance} className="Footericon behance"><FaBehance /></a>
                        </div>
                    </Col>
                    {/* موقع الشركة - خرائط جوجل */}
                    <Col md={4}>
                        <h4>Location</h4>
                        <div className="map-container">
                            <iframe
                                title="Company Location"
                                src={data.ContactUS.location}
                                width="100%"
                                height="200"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Col>
                </Row>

                
                <div className="text-center mt-4">
                    <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} Fekrh Media </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
