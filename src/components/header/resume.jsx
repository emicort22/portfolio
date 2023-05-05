import React from 'react'
import RESUME from  "../../assets/EMILIACORTEGOZO.DEV.RESUME.CV.pdf"
import "./header.css"

 const Resume = () => {
  return (
    
    <div className='cta'> <a href={RESUME} className="btn" download>Download CV</a>
    <a href="#contact" className="btn"> Let's Talk</a>
    </div>
  )
} 
export default Resume;
