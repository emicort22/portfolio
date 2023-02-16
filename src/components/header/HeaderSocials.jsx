import React from 'react'
import{ BsLinkedin, BsGithub} from 'react-icons/bs'
import{FcGoogle} from "react-icons/fc"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/emiliacortegozo/'><BsLinkedin/> </a>
        <a href='https://github.com/Emiliacortegozo'> <BsGithub/></a>
       <a href='https://developers.google.com/profile/u/105598076625218877317' ><FcGoogle/></a>

    </div>
  )
}

export default HeaderSocials