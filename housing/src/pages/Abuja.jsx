import React from 'react';
import { Container } from 'react-bootstrap';
import abj1 from "../assets/images/IMG-20231026-WA0000.jpg"
import abj2 from "../assets/images/IMG-20231026-WA0004.jpg"
import abj3 from "../assets/images/IMG-20231026-WA0007.jpg"

function Abuja() {
  const properties = [
    {
      image: abj1,
      title: 'Clean 4-bedroom flat',
      price: 'NGN 500,000',
      location: 'FavourLand Estate, Abuja',
      id: '333001D',
      type: 'One Story Flat',
      date: '28th October 2023'
    },
    {
      image: abj2,
      title: 'Clean 6-bedroom flat',
      price: 'NGN 500,000',
      location: 'FavourLand Estate, Abuja',
      id: '333001D',
      type: 'One Story Flat',
      date: '28th October 2023'
    },
    {
      image: abj3,
      title: 'Clean 5-bedroom flat',
      price: 'NGN 500,000',
      location: 'FavourLand Estate, Abuja',
      id: '333001D',
      type: 'One Story Flat',
      date: '28th October 2023'
    }
  ];

  return (
    <div>
      <h3 className="services-header">State of services</h3>
      <div className="filter-tabs">
        <a href="/services" className="filter-btn">All</a>
        <a href="/abuja" className="filter-btn active">ABUJA</a>
        <a href="/kano" className="filter-btn">KANO</a>
        <a href="/kaduna" className="filter-btn">KADUNA</a>
      </div>
      <Container>
        {properties.map((prop, index) => (
          <div key={index} className="property-detail-card">
            <div className="property-image">
              <img src={prop.image} style={{height: "400px"}} alt={prop.title} />
            </div>
            <div className="property-info">
              <div>
                <span className="status-badge badge-active">Active</span>
                <span className="status-badge badge-sale">For sale</span>
              </div>
              <h3>{prop.title}</h3>
              <div className="price">{prop.price}</div>
              <p>
                <i className="fa fa-map-marker" style={{color: '#fff', marginRight: '8px'}}></i>
                {prop.location}
              </p>
              <hr style={{borderColor: '#444', margin: '1.5rem 0'}} />
              <p>
                <i className="fa fa-calendar" style={{color: '#fff', marginRight: '8px'}}></i>
                Property ID: {prop.id}
              </p>
              <p>
                <i className="fa fa-home" style={{color: '#fff', marginRight: '8px'}}></i>
                Property Type: {prop.type}
              </p>
              <p>
                <i className="fa fa-calendar" style={{color: '#fff', marginRight: '8px'}}></i>
                Added: {prop.date}
              </p>
              <button className="contact-agent-btn">Contact Agent</button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Abuja;