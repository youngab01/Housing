import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropertyCard from '../components/PropertyCard';
import abj1 from "../assets/images/IMG-20231026-WA0000.jpg"
import abj2 from "../assets/images/IMG-20231026-WA0004.jpg"
import abj3 from "../assets/images/IMG-20231026-WA0007.jpg"
import kd1 from "../assets/images/portfolio-5.jpg"
import kd2 from "../assets/images/IMG-20231026-WA0003.jpg"
import kd3 from "../assets/images/IMG-20231026-WA0006.jpg"
import kano1 from "../assets/images/IMG-20231026-WA0002.jpg"
import kano2 from "../assets/images/IMG-20231026-WA0005.jpg"
import kano3 from "../assets/images/portfolio-2.jpg"


function Services() {
  const properties = [
    { image: kd1, title: 'kaduna', link: '/kaduna' },
    { image: abj1, title: 'Abuja', link: '/abuja' },
    { image: kano1, title: 'kano', link: '/kano' },
    { image: kd2, title: 'kaduna', link: '/kaduna' },
    { image: abj2, title: 'Abuja', link: '/abuja' },
    { image: kano2, title: 'kano', link: '/kano' },
    { image: kd3, title: 'kaduna', link: '/kaduna' },
    { image: abj3, title: 'Abuja', link: '/abuja' },
    { image: kano3, title: 'kano', link: '/kano' },
  ];

  return (
    <div>
      <h3 className="services-header">State of services</h3>
      <div className="filter-tabs">
        <a href="/services" className="filter-btn active">All</a>
        <a href="/abuja" className="filter-btn">ABUJA</a>
        <a href="/kano" className="filter-btn">KANO</a>
        <a href="/kaduna" className="filter-btn">KADUNA</a>
      </div>
      <Container className="property-grid">
        <Row>
          {properties.map((prop, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <PropertyCard {...prop} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;