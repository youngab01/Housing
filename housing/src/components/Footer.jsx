import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer-custom">
      <Container>
        <p>© Copyright <b>Amoeba</b>. All Rights Reserved</p>
        <p>Designed by <i>Ahmad</i></p>
      </Container>
    </footer>
  );
}

export default Footer;