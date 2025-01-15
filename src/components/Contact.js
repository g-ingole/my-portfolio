import React from 'react';
import './contact.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; // Consistent Bootstrap use
import Images from '../Images/Mr. Gaurav.pdf'; // Ensure proper file path

export default function Contact() {
  return (
    <div id="contact">
      <Container>
        <Row>
          <div className="contact-col-2">
            <div className="contact-left">
              <h1 className="sub-title" style={{ fontSize: 50 }}>Contact Me</h1>
              <p style={{ fontSize: 17, color: 'white' }}>
                <i className="fa-solid fa-paper-plane"></i> gauravingole00004@gmail.com
              </p>
              <p style={{ fontSize: 20, color: 'white' }}>
                <i className="fa-solid fa-square-phone"></i> 9561846883
              </p>
              <div className="social-icons">
                <a href="tel:9561846883" aria-label="Call">
                  <i className="fa-solid fa-phone"></i>
                </a>
                <a href="mailto:gauravingole00004@gmail.com?" aria-label="Email">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a href="https://github.com/g-ingole" aria-label="GitHub Profile">
                  <i className="fa-brands fa-square-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/gauravingole" aria-label="LinkedIn Profile">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
              <a href={Images} className="btn btn2" download="GauravIngoleResume.pdf">Resume</a>
            </div>
          </div>
          <div className="contact-right">
            {/* Optional Form or Content */}
          </div>
        </Row>
      </Container>
      <div className="copyright">
        <p style={{ fontSize: 20, color: 'white' }}>
          © 2023 - Template developed by <i className="fa-solid fa-heart"></i> Gaurav Ingole
        </p>
      </div>
    </div>
  );
}
