import React, { useState } from 'react';
import { Container, Form, Button, Modal, Alert, Spinner } from 'react-bootstrap';

function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    gmail: '',
    subject: '',
    message: ''
  });

  // UI state
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData)
      });

      const data = await response.json();
      
      setIsSuccess(data.success);
      setModalMessage(data.message);
      setShowModal(true);

      // Clear form on success
      if (data.success) {
        setFormData({ name: '', gmail: '', subject: '', message: '' });
      }
    } catch (error) {
      setIsSuccess(false);
      setModalMessage('An error occurred. Please check your connection and try again.');
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  // Close modal
  const handleClose = () => setShowModal(false);

  return (
    <Container className="contact-section py-5">
      {/* Header */}
      <div className="contact-header text-center mb-5">
        <h1 style={{ color: 'rgb(85, 107, 85)', fontWeight: 200, textTransform: 'capitalize' }}>
          Contact Us
        </h1>
        <p style={{ color: 'rgb(85, 107, 85)', fontSize: '1.1rem' }}>
          We are always ready to hear from you, be it a question, need an assistance or just want to say hi. Our team is here to help.
        </p>
      </div>

      {/* Contact Content */}
      <div className="row">
        {/* Left Side - Company Info */}
        <div className="col-lg-5 mb-4 mb-lg-0">
          <div className="contact-info">
            <h2 style={{ color: 'rgb(85, 107, 85)', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
              KHABAM ENTERPRISE LTD
            </h2>
            <p style={{ color: 'rgb(85, 107, 85)', textAlign: 'justify', lineHeight: 1.8 }}>
              Our goal is to provide a convenient way for customers to get in touch with us. 
              We want to ensure that your inquiries, feedback are addressed promptly. 
              Let's work together so we can provide you with excellent customer service and build 
              strong relationships. We're here to assist and support you every step of the way.
            </p>
            
            {/* Social Icons */}
            <div className="d-flex gap-3 mb-4" style={{ fontSize: '1.5rem', color: 'rgb(85, 107, 85)' }}>
              <i className="fa fa-twitter" style={{ cursor: 'pointer' }}></i>
              <i className="fa fa-facebook-official" style={{ cursor: 'pointer' }}></i>
              <i className="fa fa-linkedin" style={{ cursor: 'pointer' }}></i>
              <i className="fa fa-instagram" style={{ cursor: 'pointer' }}></i>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <p className="d-flex align-items-center gap-2" style={{ color: 'rgb(85, 107, 85)' }}>
                <i className="fa fa-map-marker" style={{ fontSize: '1.5rem', color: 'rgb(85, 107, 85)' }}></i>
                Favorland Estate
              </p>
              <p className="d-flex align-items-center gap-2" style={{ color: 'rgb(85, 107, 85)' }}>
                <i className="fa fa-envelope" style={{ fontSize: '1.2rem', color: 'rgb(85, 107, 85)' }}></i>
                info@Khabam.com
              </p>
              <p className="d-flex align-items-center gap-2" style={{ color: 'rgb(85, 107, 85)' }}>
                <i className="fa fa-mobile" style={{ fontSize: '2rem', color: 'rgb(85, 107, 85)' }}></i>
                +00000000000
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-lg-7">
          <Form onSubmit={handleSubmit} className="contact-form">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ 
                  padding: '0.75rem',
                  border: '1px solid rgb(230, 218, 218)',
                  borderRadius: '4px'
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="gmail"
                placeholder="Your email"
                value={formData.gmail}
                onChange={handleChange}
                required
                style={{ 
                  padding: '0.75rem',
                  border: '1px solid rgb(230, 218, 218)',
                  borderRadius: '4px'
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{ 
                  padding: '0.75rem',
                  border: '1px solid rgb(230, 218, 218)',
                  borderRadius: '4px'
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                name="message"
                rows={6}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ 
                  padding: '0.75rem',
                  border: '1px solid rgb(230, 218, 218)',
                  borderRadius: '4px'
                }}
              />
            </Form.Group>

            <Button 
              type="submit" 
              disabled={loading}
              style={{ 
                backgroundColor: 'rgb(85, 107, 85)',
                border: 'none',
                padding: '0.75rem 2rem',
                width: '100%',
                maxWidth: '200px'
              }}
            >
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" className="me-2" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </Form>
        </div>
      </div>

      {/* Popup Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {isSuccess ? 'Success!' : 'Error'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant={isSuccess ? 'success' : 'danger'} className="mb-0">
            {modalMessage}
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant={isSuccess ? 'success' : 'danger'} 
            onClick={handleClose}
            style={{ 
              backgroundColor: isSuccess ? 'rgb(85, 107, 85)' : '#dc3545',
              border: 'none'
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Contact;