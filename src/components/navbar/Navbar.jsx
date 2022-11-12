import React from 'react'
import "./navbar.css"

const Navbar = ({scrollHeight}) => {
  const totheTop = ()=>{
    window.scrollTo({ top: 0 , left: 0, behavior: "smooth"})
  }

  return (
    <nav className={`navbar_set ${scrollHeight> 20 ? "scrolling" : null}`}>
      <div className='navbar_logo' onClick={totheTop}>Carlos Franco</div>
    </nav> 
  )
}

export default Navbar