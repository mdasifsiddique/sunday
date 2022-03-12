import React from 'react'
import './Video.css'
import video from '../data/videos/video-1.mp4'

const Video = () => {
  return (
    <div>
        <video className='video-container' autoPlay muted loop>
            <source src={video} type="video/mp4"/>
        </video>
    </div>
  )
}

export default Video