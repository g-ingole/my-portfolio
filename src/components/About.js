import React from 'react';
import '../components/About.css';
import Demo from '../components/demo';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-3">
            {/* Uncomment and update image source */}
            {/* <img alt="Gaurav Ingole" src={Images} width={400} /> */}
          </div>
          <div className="about-col-3">
            <h1>About Me</h1>
            <p>
              I am <strong>Gaurav Ingole</strong>, a highly motivated professional with a unique blend of skills in{' '}
              <strong>Mechanical Engineering</strong>, <strong>Frontend Development</strong>, and <strong>Sales Management</strong>.
            </p>
            <p>
              With a solid foundation in Mechanical Engineering (CGPA of 9.5 from KDK College of Engineering), I’ve ventured into
              diverse domains, gaining expertise and leaving a meaningful impact in each role.
            </p>
            <ul>
              <li>
                <strong>Sales Development Manager at Nexa Automotive Manufacturers Pvt. Ltd.:</strong> Leading teams and delivering professional
                presentations.
              </li>
              <li>
                <strong>Frontend Developer:</strong> Proficiency in React JS, project management, and responsive UI design.
              </li>
              <li>
                <strong>Service Intern at Yamaha - Tajshree Motors Pvt. Ltd.:</strong> Customer service and operational excellence.
              </li>
            </ul>
            <p>
              I am passionate about learning and growth, continually updating my skill set in areas like{' '}
              <strong>AutoCAD</strong>, <strong>CREO Parametric</strong>, <strong>HTML</strong>, <strong>CSS</strong>,{' '}
              <strong>JavaScript</strong>, and <strong>React JS</strong>.
            </p>
            <div className="tab-titles">
              <Demo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
