import data from "../../data";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../../CSS/About.css";
function AboutCard() {
    return (
        <>
            <div className="about-page">

                <section className="about-header">
                    <h1>{data.AboutCard.header.h}</h1>
                    <p>{data.AboutCard.header.p}</p>
                </section>

                <Container className="about-section">
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2>{data.AboutCard.bref.h}</h2>
                            <p>{data.AboutCard.bref.p}</p>
                        </Col>
                        <Col md={6}>
                            <Image src={data.AboutCard.bref.image} alt="About Us" fluid rounded />
                        </Col>
                    </Row>
                </Container>

                <Container className="why-us">
                    <h2 className="text-center">Why Us?</h2>
                    {data.AboutCard.whyUs.map((item, index) => (
                        <Row key={index} className="align-items-center my-4">
                            {/* على الشاشات الصغيرة، الصورة تكون أسفل النص */}
                            <Col md={6} className="order-md-2 text-center">
                                <div className="why-image-container">
                                    <Image src={item.image} alt={item.title} className="why-image" fluid rounded />
                                </div>
                            </Col>
                            <Col md={6} className="order-md-1 why-text">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </div>
        </>
    );
}

export default AboutCard;