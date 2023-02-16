import React from "react";
import './contact.css'
import{GrMail} from "react-icons/gr"
import {BsWhatsapp} from "react-icons/bs"
const Contact=()=>{
    return (<section id="contact"> 
    
    <h5> Get In Touch</h5>
    <h2> Contact Me</h2>
    <div className="container contact_container">
        <div className="contact-options"> 
        <article className="contact_option">
        <GrMail className="contact.option.icon"/>
            <h4>Email
            </h4>
           
            <a href="mailto:emiliacortegozo@gmail.com "> Send a messege</a>
        </article>
        <article className="contact_option">
        <BsWhatsapp className="contact.option.icon"/>
            <h4>Whatsapp
            </h4>
          
            <a href="https://wa.me/5493512130222 "> Send a messege</a>
        </article>


            </div>    <form action=""> 
            <input type="text" name="name" placeholder="Your full name" required/>
            <input type="email" name="Email" placeholder="Your Email" required/>
            <textarea name="message" rows="7" placeholder="Your messege" required> </textarea>
            <button  className="btn btn-primary">Send Message </button>
            
            </form> 
            </div>
    
    
    </section>)
}
export default Contact