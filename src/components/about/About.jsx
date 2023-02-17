import React from 'react'
import "./about.css"
export const About = () => {
  return (
    <section id='about'>
        <h2>About me</h2>
        <div className='about'>
    <div className='aboutme'> 
    <text className='text' > Hi! I'm Emilia, a web development enthusiast 💻 from Cordoba, Argentina. 
    I'm also a graduate in psychology 🧠 This gave me knowledge and experience thanks to which I enjoy working in groups and with groups, that's why I like to think that I have very good communication skills which I consider key to solve problems, and or find other ways. I was recently selected for the "Grow with Google for Women in STEM" Program (Science, Technology, Engineering and Mathematics) to continue my professional preparation.
    </text>
   
    </div>
    <div className='aboutme'>

   <h2>CERTIFICATES</h2> 

 <text > <li> - Google Cloud Architecting with Google Compute Engine specialization.</li>
 <li>- Elastic Google Cloud Infrastructure: Scaling and Automation</li>
 <li> - Essential Cloud Infrastructure: Core Services</li>
 <li>- Google Cloud Essential Cloud Infrastructure: Foundation</li> 
 <li>- Google Cloud Fundamentals: Core Infrastructure - Google Cloud Training</li>

 <li>- English Certificate C2 Advanced- EF Standard English Test (EF SET)</li>
 <li>- Desarollo de Apps moviles - Google Activate</li>
 <li>- Cloud Computing - Google Activate</li>
 <li>- Programacion orientada a objetos (POO)- Platzi</li></text></div>
<div className='aboutme'>
<h2>SKILLS</h2>
<text>
<li>- Javascript</li>
<li>- React</li>
<li>- GCP</li>
<li>- Redux</li>
<li>- Node</li>
<li>- HTML</li>
<li>- CSS</li>
<li>- SQL</li>
<li>- Postgresql</li>
<li>- Linux</li>
<li>- English advanced C2</li></text>
</div>
<div className='aboutme'>
<h2>
Education history</h2>
<text>
<li>- Google Cloud Learning Workshop LATAM with Women in STEM Fall 2022</li>
<li>-"Soy Henry" Coding bootcamp - Full Stack Web Development</li>
<li>-Pyschology Degree from National University of Cordoba, Argentina (2018)</li>
<li>- Postgraduate certificates</li>
<li>- Published paper</li>
<li>- Investigation member</li>
</text>

    </div>
    </div>
    
    </section>)
}
export default About;