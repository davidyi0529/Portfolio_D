import React from "react";
import "./../index.css";
import HTML from "../images/html.svg";
import CSS from "../images/css.svg";
import Javascript from "../images/javascript.svg";
import Reactlogo from "../images/react.svg";
import Node from "../images/node.svg";
import Bootstrap from "../images/Bootstrap.svg";
import Heroku from "../images/Heroku.svg";
import Git from "../images/Git.svg";
import MySql from "../images/MySql.svg";
import Mongodb from "../images/mongodb.svg";

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
  
          <div className="skills-lang">
                            <img src={HTML} alt="HTML" /> &nbsp; 
                            <img src={CSS} alt="CSS" /> &nbsp; 
                            <img src={Javascript} alt="Javascript" /> &nbsp; 
                            <img src={Reactlogo} alt="Reactlogo" /> &nbsp; 
                            <img src={Node} alt="Node" /> &nbsp;
                            <br /> <br />
                            <img src={Bootstrap} alt="Bootstrap" /> &nbsp; 
                            <img src={Heroku} alt="Heroku" /> &nbsp; 
                            <img src={Git} alt="Git" /> &nbsp; 
                            <img src={MySql} alt="MySql" /> &nbsp;
                            <img src={Mongodb} alt="Mongodb" /> &nbsp;
          </div><br />
    </section>
  );
};

export default About;