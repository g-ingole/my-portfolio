import { useState } from 'react';
import './App.css';
import { Data } from '../src/components/Data';
import About from '../src/components/About';
import Services from '../src/components/Services'
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  const [contact] = useState(Data);
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
      <header id="header">
        <div className='container md={12}'>
          <nav>
            <h1 style={{ color: "white", fontWeight: "bold" }}><span>G</span>aurav.</h1>
            <ul id="sidemenu">
              {contact.map((contact) => (
                <li><a href={contact.link}>{contact.name}</a></li>
              ))}
              {/* <i class="fa-sharp fa-solid fa-xmark" onclick="closemenu()"></i> */}
            </ul>
            {/* <i className="fa-solid fa-bars" onclick="openmenu()"></i> */}
          </nav>
          <div className="header-text">
            <p style={{ fontSize: 23, color: "white" }}>SDM & Internal Trainer <br></br>MERN Stack Developer</p>
            <h1 style={{ color: "white" }}>Hi, I'm <span>Gaurav</span><br />Ingole From India</h1>
          </div>
        </div>
      </header>
      <About />
      <div id="services">
        <div className='container'>
          <h1 className='Abc' style={{ fontSize: 60, color: "white", fontWeight: "bold" }}>My Services</h1><br />
          <Services />
        </div>
        <Work />
        <Contact />
      </div>
    </div>
  );
}
export default App;
