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
          <h2>
            <i>Hi, I'm David</i>
          </h2>
            <p>
                I am a soon to be Full Stack Web Developer in the making.
                I live in the Bay Area and have been living here my whole life. <br /><br />
                I enjoy watching sports, listening to music, and playing games.
                I have been married for 4 years now and enjoy traveling, and spending time in the sun with my wife.
          
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