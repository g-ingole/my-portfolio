import React from 'react'
import './contact.css';
import Container from 'react-bootstrap/Container';
import { Row } from 'antd';
import Images from '../Images/Mr. Gaurav.pdf';



export default function Contact() {
  return (
    <div id="conatct">
      <Container>
        <Row>
          <div className="contact-col-2">
            <div className='contact-left'>
              <h1 className='sub-title' style={{ fontSize: 50 }}>Contact Me</h1>
              <p style={{ fontSize: 17, color: "white" }}><i className="fa-solid fa-paper-plane"></i> gauravingole00004@gmail.com</p>
              <p style={{ fontSize: 20, color: "white" }}><i className="fa-solid fa-square-phone"></i> 9561846883</p>
              <div class="social-icons">
                <a href="tel:9561846883"><i className="fa-solid fa-phone"></i></a>
                <a href="mailto:gauravingole00004@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                <a href="https://github.com/g-ingole"><i className="fa-brands fa-square-github"></i></a>
                <a href="https://www.linkedin.com/in/gauravingole"><i className="fa-brands fa-linkedin"></i></a>
              </div>
              <a href={Images} className="btn btn2">Resume</a>
            </div>
          </div>
          <div className="contact-right">
            {/* <h1 style={{marginTop:"10px", marginLeft:100}}>THE BEST WAY YOU CAN PREDICT THE FUTURE IS TO CREATE IT.</h1> */}
            <span id="msg"></span>
          </div>
        </Row>
      </Container>
      <div className="copyright">
        <p style={{ fontSize: 20,color:"white" }}>© 2023 - Template developed by <i className="fa-solid fa-heart"></i> Gaurav Ingole</p>
      </div>
    </div>
  )
}
