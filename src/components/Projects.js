import React, { Component } from "react";
import Project from "../components/ProjectCards"
import projects from "../projectData.json";

class Projects extends Component {
    state ={
        projects
    };

    render () {
        return(
            <div id="Projects">
                <header>
                    Projects
                </header>

                <container>
                    {this.state.projects.map(project => (
                        <Project
                        id={project.id}
                        name={project.name}
                        image={project.image}
                        description={project.description}
                        link={project.link}
                        />
                    ))}
                </container>
            </div>
            );
    }
}

export default Projects;