import React from "react";
import { Button , CardGroup } from 'react-bootstrap'
// import "./style.css";

function ProjectCards(props) {
    return (
        <CardGroup className="project-card">
           <a href={props.link}>

               <div className="card col">
                   <img src={props.image} 
                   style={{width:"220px", height:"220px"}}
                   className="card-img-top project-icons"
                   alt={props.title}
                   target="_blank" />

                   <div className="card-body">
                       <p className="card-text">{props.name}</p>
                   </div>
                   <div className='btn-grp'>
                        <Button href={props.link} target='_blank'>
                            Live Demo
                        </Button>
                        <Button href={props.source} target='_blank' variant='secondary'>
                            Source Code
                        </Button>
                        </div>
               </div>
           </a>
        </CardGroup>
    )
}

export default ProjectCards