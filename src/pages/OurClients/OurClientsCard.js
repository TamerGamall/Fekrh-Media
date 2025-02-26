import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // للتنقل بين الصفحات
import data from "../../data";
import "../../CSS/OurClients.css";

function OurClientsCard() {
    const navigate = useNavigate();
    const [hoveredClient, setHoveredClient] = useState(null);

    return (
        <Container className="clients-page py-5">
            <h2 className="text-center mb-4">Our Clients</h2>
            <Row>
                {data.clientsData.map((client) => (
                    <Col md={4} key={client.id} className="mb-4">
                        <Card
                            className="client-card"
                            onMouseEnter={() => setHoveredClient(client.id)}
                            onMouseLeave={() => setHoveredClient(null)}
                        >
                            <div className="client-card-content">
                                {hoveredClient === client.id ? (
                                    <div className="client-info">
                                        <h4>{client.name}</h4>
                                        <p>{client.bref}</p>
                                        <Button
                                            variant="primary"
                                            onClick={() => navigate(client.detailsPage)}
                                        >
                                            Explore
                                        </Button>
                                    </div>
                                ) : (
                                    <Card.Img
                                        variant="top"
                                        src={client.logo}
                                        alt={client.name}
                                        className="client-logo"
                                    />
                                )}
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default OurClientsCard;
