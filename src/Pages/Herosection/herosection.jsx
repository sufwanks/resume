import './herosection.css';
import heroImg from "../../Images/sarath.jpg"
import { NavLink } from "react-router-dom";
import { useState } from 'react';



function Herosection() {

    const [opennav, setOpennav] = useState(false)
    return (

        <>
                <div className='App'>
            <div className='herosection px-9 py-5'>
                <nav className={
                    !opennav?'d-flex navbar-fixed-new justify-content-between flex-rows transition-all': 'd-flex bg-new navbar-new justify-content-between flex-rows transition-all'
                    }>

                    <span className='brand-name '>Tranetech Softwares </span>
                    <div className='d-flex flex-rows py-5' onClick={() => setOpennav(!opennav)}>
                        <span className='mx-4 nav-items'>
                            <NavLink className="nav-link" to="/">
                                HOME
                            </NavLink>
                        </span>
                        <span className='mx-4 nav-items'>

                            <NavLink className="nav-link" to="/about">
                                About Me
                            </NavLink>
                        </span>
                        <span className='mx-4 nav-items'>
                            <NavLink className="nav-link" to="/resume">
                                Resume
                            </NavLink>
                        </span>
                        <span className='mx-4 nav-items'>
                            <NavLink className="nav-link" to="/testimonial">
                                Testimonial
                            </NavLink>
                        </span>
                        <span className='mx-4 nav-items'>
                            <NavLink className="nav-link" to="/contact">
                                Contact me
                            </NavLink>
                        </span>
                    </div>
                </nav>
                <div className='herosection px-10 py-5'>
                    <div className='navbar-option-mobile bg-new'>
                    <div className='bars ' onClick={() => setOpennav(!opennav)}></div>

                    </div>

                    <div className='herosection-2 row justify-content-center'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex flex-column justify-content-center Im-text-selection'>
                                <span className='Im-text'>
                                    Hello I'm <span className='name-Im-text'> Sharath Kumar</span>
                                </span>
                                <span className='Im-text-enthusiastic py-2'>
                                    Enthusiastic Full Stack Dev
                                </span>
                                <span className='Im-text-subheading'>
                                    Knack of building applications with front and back end operations
                                </span>
                                <div className='d-flex flex-row justify-content-center'>
                                    <button className='btn-hire-me'>
                                        <NavLink className="nav-link" to="/contact">
                                            Hire me
                                        </NavLink></button>
                                    <button className='btn-resume' >
                                        <NavLink className="nav-link" to="/resume">
                                            Get Resume
                                        </NavLink></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='d-flex justify-content-center custom-div-outer-img'>
                                <img className='img-fluid custom-img' src={heroImg} alt="heroimage" />

                            </div>


                        </div>

                    </div>
                </div>
            </div>

        </div>


        </>

    )
}


export default Herosection;