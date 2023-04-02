import React from 'react'
import mee from "../../assets/mee.jpg"
import HeaderSocials from './HeaderSocials'
import Resume from './resume'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import './header.css'

const  Header = () => {
  return (
    <header>
    <div className='container header_container'>
       <h5> Hello I'm</h5>
       <h1> Emilia Cortegozo</h1>
       <h5 className='text-light'> Fullstack Developer</h5>
          <Resume />
            <div className="me">
              <img src={mee} alt='profile picture'/>
              </div>
          <div className='scroll_down'>
            <a href='#contact' > Scroll Down <BsFillArrowRightCircleFill/></a>
           
            </div>
            <HeaderSocials/>
           </div>
          
           </header>
  )
}
export default Header;