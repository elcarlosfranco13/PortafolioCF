import React from 'react'
import "./cover.css"
import coverVideo from "../../media/coverVideo.mp4"


const Cover = () => {
  return (
    <div className='cover-container' >
      <video className='cover_video' src= {coverVideo} autoPlay muted loop/>
      <h1 className='cover_title'>Carlos Franco</h1>
      <p className='cover_description'>Web Full Stack Developer| Designer | Accountant</p>
    </div>
  )
}

export default Cover