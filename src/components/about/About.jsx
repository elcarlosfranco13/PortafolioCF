import React from 'react'
import "./about.css"
import aboutImg from "../../media/aboutImg.jpg"

const About = () => {
  return (
    <div className='about-container'>
      <div className='about_description'>
        <h3 className='about_title'>Sobre mí</h3>
        <p className='about_par'>Desarrollador web full stack egresado de Academlo, enfocado a crear un código limpio, eficiente y fácil de entender, así como
          contador público con experiencia en auditoria financiera, con gran visión para implementar procesos de desarrollo</p>
      </div>
      <div className='about_img'>
        <img src={aboutImg} alt="about" />
      </div>
    </div>
  )
}

export default About