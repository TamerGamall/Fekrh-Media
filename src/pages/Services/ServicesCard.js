import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import data from "../../data";
import "./Services.css";

const ServicesCard = () => {
    return (
        <>
            
            <Container className="services-page py-5">
                <h2 className="text-center mb-4">Our Services</h2>
                <Row>
                    {data.services.map((service, index) => (
                        <Col md={4} sm={6} xs={12} key={index} className="mb-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Card className="service-card">
                                    <Card.Img variant="top" src={service.image} alt={service.name} />
                                    <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>{service.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ServicesCard;
