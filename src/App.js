import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import About from './Components/About/About';
import Certificates from './Components/Certificates/Certificates';
import Contacts from './Components/Contacts/Contacts';
import Header from './Components/Header/Header';
import Projects from './Components/Projects/Projects';

function App() {

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ '--cursor-x': `${cursorPosition.x}px`, '--cursor-y': `${cursorPosition.y}px` }}>
      <div className="flashlight"></div>
        <div className="AppContainer">
          <div className='HeaderContainer'>
            <div className='fixedContainer'>
              <Header />
            </div>
          </div>
          <div className='RightSideContainer'>
            <div id='about' className='AboutContainer'>
              <About />
            </div>
            <div id='projects' className='ProjectsContainer'>
              <Projects />
            </div>
            <div className='CertificatesContainer' id='certificates'>
              <Certificates />
            </div>
            <div className='ContactsContainer' id='contacts'>
              <Contacts />
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
