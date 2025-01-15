import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './work.css';

const workItems = [
  {
    id: 1,
    title: "UsabilityHub",
    description: "Developed a static clone website of UsabilityHub and also made it Mobile Friendly.",
    image: require('../Images/screencapture-celebrated-longma-d80e44-netlify-app-2025-01-13-18_44_47.png'),
    link: "https://celebrated-longma-d80e44.netlify.app/"
  },
  {
    id: 2,
    title: "Dribble",
    description: "Developed a static and attractive Clone website of dribble.",
    image: require('../Images/screencapture-responsive-dribble-netlify-app-2025-01-13-18_37_08.png'),
    link: "https://responsive-dribble.netlify.app/"
  },
  {
    id: 3,
    title: "Dashboard",
    description: "Static dashboard with profile image uploads, login/logout, responsive charts, team management, and light/dark mode support.",
    image: require('../Images/ccd.png'),
    link: 'https://65f31cb57ef5a9f2564200ef--cheery-arithmetic-b2b413.netlify.app/'
  }
];

function Work() {
  return (
    <div id="portfolio">
      <Container>
        <h1 className="sub-title" style={{ fontSize: 70 }}>My Work</h1>
        <div className="work-list">
          {workItems.map(item => (
            <Col key={item.id}>
              <div className="work">
                <img alt={item.title} src={item.image} />
                <div className="layer">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-arrow-up-right-from-square fa-beat"></i>
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </Container>
      <a href="https://github.com/g-ingole?tab=repositories" className="btn">See more</a>
    </div>
  );
}

export default Work;
