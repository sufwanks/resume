import React from "react";
import './programming.css'

function Programming() {

    const value =[
        {
            text: "javascript",
            percentage: 80
        },
        {
            text: "HTML",
            percentage: 80
        },
        {
            text: "CSS",
            percentage: 80
        },
        {
            text: "Angular",
            percentage: 80
        }
        
    ]

    return (
        <>
        <div className="row mb-2">
            {value.map((value,index)=>{
                return (
                    <>
                    <div className="col-lg-4 col-md-4 col-sm-12 mt-3 ">
                        <span className="language">{value.text}</span>

                        <div className="progress-some">
                            <div className="progress-new" style={{width:`${value.percentage}%`}}>
                                {" "}
                            </div>
                        </div>

                    </div>
                    </>
                )
            })}
        </div>
        </>
    )
}

export default Programming