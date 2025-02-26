import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Modal, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import data from "../../data";
import Hero from "../../components/Hero";
import "./ClientDetails.css";

function ClientDetails() {
    const { fid } = useParams();
    const navigate = useNavigate();
    const client = data.clientsData.find((c) => c.detailsPage.includes(fid));
    const [showModal] = useState(!client);

    return (
        <>
            <Hero title={data.heroSections.Clientes.title} subtitle={data.heroSections.Clientes.subtitle} image={data.heroSections.Clientes.image}/>
            
            {/* Client Not Found*/}
            <Modal show={showModal} onHide={() => navigate("/OurClients")} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Client Not Found</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Sorry, the client you are looking for does not exist.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => navigate("/OurClients")}>
                        Back to Clients
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Client Found*/}
            {client && (
                <Container className="client-details-page py-5">
                    <Row className="justify-content-center text-center">
                        <Col md={8}>
                            <motion.h2
                                className="text-center"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                            >
                                {client.name}
                            </motion.h2>
                        </Col>
                    </Row>

                    <Row className="justify-content-center text-center">
                        <Col xs={10} sm={8} md={6}>
                            <motion.img
                                src={client.logo}
                                alt={client.name}
                                className="client-details-logo img-fluid"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.3 }}
                            />
                        </Col>
                    </Row>

                    <Row className="justify-content-center text-center mt-4">
                        <Col xs={12} md={10} lg={8}>
                            <motion.p
                                className="client-description"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.4 }}
                            >
                                {client.description}
                            </motion.p>
                        </Col>
                    </Row>

                    {/* Behance Presentation */}
                    {client.behanceLink && (
                        <Row className="justify-content-center mt-4">
                            <Col xs={12} md={10} lg={8}>
                                <motion.div 
                                    className="behance-presentation"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <h4 className="text-center">Presentation</h4>
                                    <iframe
                                        src={client.behanceLink}
                                        title="Behance Presentation"
                                        width="100%"
                                        height="500px"
                                        allowFullScreen
                                        className="responsive-iframe"
                                    ></iframe>
                                </motion.div>
                            </Col>
                        </Row>
                    )}
                </Container>
            )}
        </>
    );
}

export default ClientDetails;
