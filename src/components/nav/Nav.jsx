import React from 'react'
import {TbFileCertificate} from "react-icons/tb"
import{GrMail} from "react-icons/gr"
import{AiFillHome} from "react-icons/ai"
import {MdAppSettingsAlt} from "react-icons/md"
import "./nav.css"
import { useState } from 'react';

export const Nav = () => {
  const[activeNav, setActiveNav]= useState("# ")

  return (
    <nav className='nav'>
      <a href="#" onClick={()=> setActiveNav('#')}className={activeNav === '#' ? 'active': ''}>home <AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('about')}className={activeNav === 'about' ? 'active': ''}>about <TbFileCertificate/></a>
      <a href="#projects" onClick={()=> setActiveNav('proyects')}className={activeNav === 'proyects' ? 'active': ''}>projects <MdAppSettingsAlt/> </a>
      <a href="#contact"onClick={()=> setActiveNav('contact')}className={activeNav === 'contact' ? 'active': ''}> contact <GrMail/> </a>
    </nav>
  )
}
