import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="hero-section">
      <Container>
        <div className="hero-content">
          <h1>Welcome to Khabam Global Enterprise ltd.</h1>
          <p>Thank you for choosing our company. We're here to provide you with top-notch service.</p>
          <p>Welcome aboard!</p>
          <Button as={Link} to="/about" className="hero-btn">
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Home;