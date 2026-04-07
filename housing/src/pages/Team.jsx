import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import team1 from "../assets/images/team-1.jpg"
import team2 from "../assets/images/team-2.jpg"
import team3 from "../assets/images/team-3.jpg"

function Team() {
  const teamMembers = [
    {
      image: team1,
      name: 'Ahmad Bello',
      role: 'Director',
      description: 'Ahmad Bello plays a pivotal role in overseeing the operations and ensuring that our team operates and ensures that our team operates smoothly. He is an expert in this field which makes the delivery of services a top-notch.'
    },
    {
      image: team2,
      name: 'Abdulhakeem Bello',
      role: 'CEO',
      description: 'Abdulhakeem Bello brings a wealth of experience and strategies on the direction to our organization. With his services we deliver the best solution and exceed your experience on the best housing solution.'
    },
    {
      image: team3,
      name: 'Ibrahim Bello',
      role: 'Director',
      description: 'Ibrahim Bello holds the key on operational knowledge and experience to our team. He gives the easy flow to our processes and enhances efficiency that we give to our clients.'
    }
  ];

  return (
    <Container className="team-section">
      <div className="team-header">
        <h1>Our Team</h1>
        <h2>
          At KHABAM ENTERPRISE LTD!, we have a dedicated team of experts who are passionate about helping you find your dream home.
        </h2>
      </div>
      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index} md={6} lg={4}>
            <div className="team-card">
              <img src={member.image} alt={member.name} />
              <h1>{member.name}</h1>
              <h3>{member.role}</h3>
              <p>{member.description}</p>
              <div className="social-icons">
                <i className="fa fa-twitter"></i>
                <i className="fa fa-facebook-official"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-instagram"></i>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Team;