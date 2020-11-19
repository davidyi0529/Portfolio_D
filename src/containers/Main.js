import React, { useEffect } from 'react';
import './../index.css';
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

import projectData from '../projectData';

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000, offset: 200 });
  }, []);

  return (
    <div className='main-container'>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;