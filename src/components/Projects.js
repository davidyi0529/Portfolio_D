import React, { Component } from "react";
import Project from "../components/ProjectCards"
import projects from "../projectData.json";

class Projects extends Component {
    state ={
        projects
    };

    render () {
        return(
            <div id="Projects" class="project-container">
                <h1 className="project-header">
                    Projects
                </h1>

                <container>
                    <div className="project-row">
                    {this.state.projects.map(project => (
                        <Project
                        name={project.name}
                        image={project.image}
                        source={project.source}
                        link={project.link}
                        />
                    ))}
                    </div>
                </container>
            </div>
            );
    }
}

export default Projects;