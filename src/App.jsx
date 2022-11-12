import './App.css'
import Cover from './components/cover/Cover'
import Navbar from './components/navbar/Navbar'
import React, { useEffect, useState } from 'react'
import About from './components/about/About'
import Carousel from './components/carousel/CarouselContainer'



function App() {
  const [scrollHeight, setScrollHeight] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY
    setScrollHeight(position)
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
  }, [scrollHeight])


  return (
    <div className="App">
      <Navbar scrollHeight= {scrollHeight} />
      < Cover />
      < About />
      < Carousel />
  
    </div>
  )
}

export default App
