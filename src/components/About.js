import React from "react";
import "./../index.css";

const About = () => {
  return (
    <section
      data-aos="fade-right"
      className="about-container"
      name="about"
      id="about"
    >
      <h1 className="heading">About Me</h1>
          <h3>
            <i>Hi, I'm David</i>
          </h3>
          <p>
            
            
          </p>
          <h3>
            <i>Where I'm From</i>
          </h3>
          <p>
            
            
          </p>
          <h3>
            <i>Where I'm Headed</i>
          </h3>
          <p>
            
         
          </p>
  
      <div className="techs">
        <li>
          <i className="fab html fa-html5"></i> <p>HTML5</p>
        </li>
        <li>
          <i className="fab css fa-css3"></i>
          <p>CSS3</p>
        </li>
        <li>
          <i className="fab bootstrap fa-bootstrap"></i>
          <p>Bootstrap</p>
        </li>
        <li>
          <i className="fab javascript fa-js"></i>
          <p>Javascript</p>
        </li>
        <li>
          <i className="fab react fa-react"></i>
          <p>React</p>
        </li>

      </div>
    </section>
  );
};

export default About;