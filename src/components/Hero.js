import { Container, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTelegramPlane, FaBehance } from "react-icons/fa";
import data from "../data";
import "../CSS/Hero.css"
import { useNavigate } from "react-router-dom";

const Hero = ({ title, subtitle, image }) => {
    const navigate = useNavigate();
    const heroStyle = {
        background: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), 
                url(${image}) center/cover no-repeat fixed `,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        
    };

    const iconStyle = {
        fontSize: "1.8rem",
        margin: "0 10px",
        color: "white",
        cursor: "pointer",
        transition: "0.3s",
    };

    return (
        <div style={heroStyle} >
            <Container>
                <h1 className="display-4 fw-bold">{title}</h1>
                <p className="lead">{subtitle}</p>
                <Button onClick={() => navigate("/about")} variant="primary" size="lg">Learn More</Button>


                <div className="social-icons mt-4 ">
                    <a href={data.Social.facebook} target="_blank" rel="noopener noreferrer" className="icon facebook">
                        <FaFacebookF style={iconStyle} />
                    </a>
                    <a href={data.Social.x} target="_blank" rel="noopener noreferrer" className="icon twitter">
                        <FaTwitter style={iconStyle} />
                    </a>
                    <a href={data.Social.instagram} target="_blank" rel="noopener noreferrer" className="icon instagram">
                        <FaInstagram style={iconStyle} />
                    </a>
                    <a href={data.Social.youtube} target="_blank" rel="noopener noreferrer" className="icon youtube">
                        <FaYoutube style={iconStyle} />
                    </a>
                    <a href={data.Social.telegram} target="_blank" rel="noopener noreferrer" className="icon telegram">
                        <FaTelegramPlane style={iconStyle} />
                    </a>
                    <a href={data.Social.behance} target="_blank" rel="noopener noreferrer" className="icon behance">
                        <FaBehance style={iconStyle} />
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default Hero;
