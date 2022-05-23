import React from "react";
import './education.css'

function Education() {
    return (
        <><div className="d-flex flex-column">
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one"> 
                <span className="university-name">
                    Nehru College of engineering and Research Center
                </span>
                <span className="university-degree">
                Bachelor of Technology in Mechanical Engineering
                </span>
                
                </div>
                <span className="university-passout">
                2015-2019
                </span>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one"> 
                <span className="university-name">
                    G.H.S.S MANKARA
                </span>
                <span className="university-degree">
                Bio Science
                </span>
                
                </div>
                <span className="university-passout">
                2013-2015
                </span>
            </div>
            <div className="education-one my-4 justify-content-between d-flex flex-row">
                <div className="d-flex flex-column new-one"> 
                <span className="university-name">
                    M.H.S.S Parli
                </span>
                <span className="university-degree">
               SSLC
                </span>
                
                </div>
                <span className="university-passout">
                2012-2013
                </span>
            </div>
            </div>
        </>
    )
}

export default Education