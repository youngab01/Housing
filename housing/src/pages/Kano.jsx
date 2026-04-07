import React from 'react';
import { Container } from 'react-bootstrap';
import kano1 from "../assets/images/IMG-20231026-WA0002.jpg"
import kano2 from "../assets/images/IMG-20231026-WA0005.jpg"
import kano3 from "../assets/images/portfolio-2.jpg"

function Kano() {
  const properties = [
    {
      image: kano1,
      title: 'Clean 4-bedroom flat',
      price: 'NGN 500,000',
      location: 'FavourLand Estate, Kano',
      id: '333000B',
      type: 'One Story Flat',
      date: '28th October 2023'
    },
    {
      image: kano2,
      title: 'Clean 6-bedroom flat',
      price: 'NGN 800,000',
      location: 'FavourLand Estate, Kano',
      id: '333010D',
      type: 'One Story Flat',
      date: '28th October 2023'
    },
    {
      image: kano3,
      title: 'Clean 4-bedroom fully detached with a 2 bedroom Bq',
      price: 'NGN 700,000',
      location: 'FavourLand Estate, Kano',
      id: '333001D',
      type: 'One Story Flat',
      date: '28th October 2023',
      style: { width: '100%', height: '400px', objectFit: 'cover' }
    }
  ];

  return (
    <div>
      <h3 className="services-header">State of services</h3>
      <div className="filter-tabs">
        <a href="/services" className="filter-btn">All</a>
        <a href="/abuja" className="filter-btn">ABUJA</a>
        <a href="/kano" className="filter-btn active">KANO</a>
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

export default Kano;