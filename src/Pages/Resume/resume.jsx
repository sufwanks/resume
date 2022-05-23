import './resume.css'
import React, { useState } from "react";
import Education from "../../Components/Education/eduction";
import Programming from "../../Components/Programming/programming";
import Projects from "../../Components/Projects/projects";
import Work from "../../Components/Work/work";

function Resume() {

    const [education, seteducation] = useState(true)
    const [workhistory, setworkhistory] = useState(false)
    const [programming, setprogramming] = useState(false)
    const [projects, setprojects] = useState(false)

    function setAllFalse() {
        seteducation(false)
        setworkhistory(false)
        setprogramming(false)
        setprojects(false)
    }

    function changeState(function1, state1) {
        setAllFalse()
        function1(state1)
    }

    return (

        <>
            <div className="resume-outer-section d-flex flex-column container">
                <span className="resume-text">Resume</span>
                <span className="resume-text-sub">My formal Bio Deatails</span>

                <div className="row resume-new-section ">
                    <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex flex-row" >
                        <div className="d-flex flex-column bg-new text-white">

                            <span className="icons-span">
                                <i class="fas fa-user-graduate"></i>{" "}
                            </span>
                            <span className="icons-span">
                                <i class="fas fa-briefcase"></i>{" "}
                            </span>
                            <span className="icons-span">
                                <i class="fas fa-code"></i>{" "}
                            </span>
                            <span className="icons-span">
                                <i class="fas fa-tasks"></i>{" "}
                            </span>

                        </div>

                        <div className="d-flex flex-column">
                            <span className={education === false ? "resume-options-items" : "selected resume-options-items  "} onClick={() => {
                                changeState(seteducation, true)
                            }}>
                                Education {" "}
                            </span>
                            <span className={workhistory === false ? "resume-options-items" : "selected resume-options-items  "} onClick={() => {
                                changeState(setworkhistory, true)
                            }}>Work{" "}</span>
                            <span className={programming === false ? "resume-options-items" : "selected resume-options-items  "} onClick={() => {
                                changeState(setprogramming, true)
                            }}>Programming{" "}
                            </span>

                            <span className={projects === false ? "resume-options-items" : "selected resume-options-items  "} onClick={() => {
                                changeState(setprojects, true)
                            }}>
                                Projects
                            </span>

                        </div>

                        
                    </div>
                    <div className="col-lg-8 col-md-8 resume-right-section">
                            {education === true && <Education />}
                            {workhistory === true && <Work />}
                            {programming === true && <Programming />}
                            {projects === true && <Projects />}
                        </div>


                </div>
            </div>
        </>
    )
}

export default Resume;