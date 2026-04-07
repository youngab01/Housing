import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImg from "../assets/images/about-img .jpg"

function AboutUs() {
  return (
    <Container className="about-section">
      <h3 className="services-header">About Us</h3>
      <div className="about-content">
        <div className="about-text">
          <h3>My Home.</h3>
          <p>Welcome to Khabam Global Global Enterprise Ltd!</p>
          <p>
            We specialize in providing high quality rental home that meet your needs and exceed your expectation. 
            With a wide selection of properties in the various state e.g (Abuja, Kano, Kaduna,), we strive to make 
            the rental process easy and enjoyable for our tenants. Our team is dedicated to providing excellent 
            customer service, ensuring that you find the perfect home that fits your lifestyle and budget. 
            From cozy apartments to spacious houses, we have options for every preference. We pride ourselves 
            on maintained properties responding promptly to any maintenance requests. Trust us to help you find 
            your ideal rental home.
          </p>
          <p>Start your search with us today!</p>
        </div>
        <div className="about-image">
          <img src={aboutImg} alt="About Khabam" />
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;