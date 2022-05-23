import React from "react";
import './testimonial.css'

function Testimonial () {
    
    const testimonial = [
        {
            name : "Nandini",
            text : 'This guy is incredible awesome. I hired him and when he delivered.I honestly fell in love with the project and ideas. He is indeed a great guy'
        },
        {
            name : "Abishek",
            text : 'It’s really admirable how he always see projects through from conception to completion. He`s efforts at strengthening our culture have not gone unnoticed.'
        },
        {
            name : "Vishnu",
            text : 'Never before have I seen an employee so dedicated, hard-working, and yet still tenacious at the same time. You’re an inspiration to all of us'
        }
    ]
    
    return (
        <>
        <div className="d-flex flex-column">
        <span className='testimonial-text'>Testimonials</span>
        <span className='what-txt-sub'> What my clients say about me</span>
        </div>
        <div>
            <div className="row mx-5">
                {testimonial.map((value) => {
                    return (
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="card shadow testimonial-card d-flex flex-column">
                                <span className="description">{value.text}</span>
                                <span className="stars">⭐⭐⭐⭐⭐</span>
                                <span className="name">{value.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Testimonial