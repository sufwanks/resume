import React from "react";
import './work.css'
function Work() {
    return (
        <>
            <div className="work-inside-new mx-2 mt-3">
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between">
                    <span className="company-name">Tranetech Software Solutions</span>
                    <span className="year">2022-present</span>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <span className="position">Jr Software Developer</span>
                    <span className="description-position">
                        <ul>
                            <li>
                                {" "}
                                created a copy model of KSC Abudhabi which have login and register portal
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Work;