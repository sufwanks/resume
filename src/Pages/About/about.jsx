import './about.css';
import React from 'react'

function About() {
    return (
        <>
            <div className='about-me-section container aboutme-iside my-5'>
                <div className="d-flex flex-column">
                    <span className='about-me-text'>About me</span>
                    <span className='why-txt-sub'> why choose me</span>
                    <div className='row tab justify-content-center shadow-lg my-5'>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_hrkmmhjf.json"  className="lottie-img"
                            background="transparent" speed=".5"  loop autoplay></lottie-player>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column" >
                            <span className='some-text-about-me'>
                                My passion is to make useful digital products. I like to be creative with technology.
                                Together with great people I work on some amazing projects.
                                I make apps and consult about it. I am based in India,
                                but always up for adventures abroad.
                            </span>
                            <span className='few-highlights'>
                                <span className='few-text'> Here few things about me</span>
                                <span className='few-lists'>
                                    <ul>
                                        <li>Swift 3.0</li>
                                        <li>Apple’s Xcode IDE</li>
                                        <li>Spatial Reasoning</li>
                                        <li>Design Guidelines</li>
                                        <li>UI and UX design experience</li>
                                    </ul>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About