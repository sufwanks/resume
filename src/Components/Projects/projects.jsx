import React from "react";
import './projects.css'

function Projects() {
    return (
        <>
            <div className="d-flex flex-column">
                <div className="project-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="project-name">
                            Portfolio Website
                        </span>
                        <span className="tool">
                            React
                        </span>

                    </div>

                </div>
                <div className="education-one my-4 justify-content-between d-flex flex-row">
                    <div className="d-flex flex-column new-one">
                        <span className="project-name">
                            Bank Application
                        </span>
                        <span className="tool">
                            Angular
                        </span>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Projects;