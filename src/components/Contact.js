import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:david.yi.0529@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="david.yi.0529@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/davidyi0529/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/davidyi0529" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://david-yi-0529.medium.com/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-success" title="My other projects">
                  <i className="fab fa-medium"></i> Medium
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/davidyi0529/Updated-Portfolio_D/blob/main/assets/images/Resume.PDF" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-warning" title="My other projects">
                  Resume
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default Contact;