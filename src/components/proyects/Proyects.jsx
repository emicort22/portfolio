import React from 'react'
import "./proyects.css"



const Proyects = () => {
  const data= [{
    id:"1",
    title:" React Shopping Cart",
  img:"https://user-images.githubusercontent.com/96702771/216614181-1490059b-f2c6-4a30-9049-1796ee2a3308.png ",
  code:"https://github.com/Emiliacortegozo/React-ShoppingCart-TSX",
  demo:" https://emishoping.rj.r.appspot.com/",
  
  },{  id:"2",
  title:" videogames",
img:"https://user-images.githubusercontent.com/96702771/180893781-b26e1b3d-b9e9-427b-acdd-7de9935c9b22.png",
code:"https://github.com/Emiliacortegozo/videogames ",
demo:"https://20221215t145343-dot-sunlit-inquiry-365401.rj.r.appspot.com/ "},
{  id:"3",
  title:" Weather App",
img:"https://user-images.githubusercontent.com/96702771/180892911-7376c475-174c-4d6f-9ed3-25c85aeb2042.png ",
code:"https://github.com/Emiliacortegozo/React-weather",
demo: "",},
{
  id:"4",
  title:" Apartments for rent site",
img:" ",
code:"https://github.com/Emiliacortegozo/alquilerbuho",
demo:" ",

},]









  return (
    <section id="projects" className='proyects'> 
    <h2> My Recent Work</h2>
    


    <div className='container projects_container'>
      {data.map(({id, img,title,demo,code})=>{
      return(
        <article className='portfolio_item'>
        <div className='portfolio_item-image'>
          <img src={img} alt='in progress'/>
        </div> 
        <h3> {title}</h3>
         

<div className='portfolio_item-cta'>
    
    <a className="btn" href={demo}> Demo</a>
     
     <a className="btn" href={code}>code</a>
     </div>
    </article>
      )})}
      


    </div>
    </section>
  )
}

export default Proyects