import React, { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import './contact.css';


function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        console.log(form.current);

        const templateParams = {
            from_name: name+" "+email,
            to_name: "kssufwan@gmail.com",
            feedback: message
        }
        emailjs.send("service_moaj3so" , "template_xk3xygc", templateParams, 'qCQHk5PcaWWa3GkdC')
        .then((res)=>{
            console.log(res.text);
        })
        // emailjs.sendForm('service_moaj3so', 'template_xk3xygc', form.current, 'qCQHk5PcaWWa3GkdC')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        }
    return (
        <>
            <div className="contact-me-part">
                <div className="relative-bg"></div>

                <div className="contact-inner-part d-flex flex-column">
                    <span className='contact-text'>Contact Me</span>
                    <span className='what-txt-sub '> Let's keep in touch</span>

                </div>
                 <div>
                <div className="contact-me-card row">

                    <div className="col-lg-5 col-md-4 col-sm-12 left-contact px-2 py-2">

                        <div className="py-5 lottie-img2 d-flex justify-content-center">
                            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_wytnbin0/ContactArrowButton.json" background="transparent" speed=".5"  loop autoplay></lottie-player>


                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-sm-12 my-auto">
                        <form ref={form} className="d-flex flex-column contact-right" onSubmit={sendEmail}>
                            <div className="input-grup my-3 d-flex flex-column">

                                <input value={name} onChange={(e) => {
                                    setName(e.target.value)
                                }} type="text" placeholder="Enter your name" className="input-groups" />
                            </div>
                            <div className="input-grup my-3 d-flex flex-column">

                                <input value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} type="text" placeholder="Enter your email" className="input-groups" />
                            </div>
                            <div className="input-grup my-3 d-flex flex-column">

                                <textarea value={message} onChange={(e) => {
                                    setMessage(e.target.value)
                                }} type="text" placeholder="Enter your message" className="input-groups" />
                            </div>
                            <div className="input-grup my-3 d-flex flex-column">
                                <input type="submit" class="btn-hover color-9" value="Send message"/> {" "}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
           
        </>
    )
}

export default Contact;