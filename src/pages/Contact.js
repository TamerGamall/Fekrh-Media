import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../CSS/Contact.css";
import data from "../data";
import { motion } from "framer-motion";
import Hero from "../components/Hero";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            
            <Hero title={data.heroSections.contact.title} subtitle={data.heroSections.contact.subtitle} image={data.heroSections.contact.image}/>
            <Container className="contact-page">
                
                <motion.h2
                    className="text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contact Us
                </motion.h2>

                <Row className="contact-container">
                    {/* ✅ معلومات التواصل */}
                    <Col md={5} className="contact-info">
                        <h4>Keep in Touch</h4>
                        <p><strong>📍 Address:</strong> {data.ContactUS.Adresss}</p>
                        <p><strong>📞 Phone:</strong> {data.ContactUS.companyNumper}</p>
                        <p><strong>📧 Email:</strong> {data.ContactUS.companyMail}</p>
                    </Col>

                    {/* ✅ نموذج التواصل */}
                    <Col md={7}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Form onSubmit={handleSubmit} className="contact-form">
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Button type="submit" className="contact-btn">
                                    Send Message
                                </Button>
                            </Form>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;
