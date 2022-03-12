import React from 'react'

import './SingleSection.css'


const SingleSection = ({item}) => {
  const {id,title,subtitle,video,items} = item
  const playVideo = (e) => {
    // e.target.play()
    console.log(e.target);
    console.log("On");
  }
  const pauseVideo = (e) => {
    // e.target.stop()
    console.log(e.target);
    console.log("Off");
  }
  return (
    <div className='section-container' onMouseOver={playVideo} onMouseOut={pauseVideo}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <video autoPlay muted loop onMouseOver={playVideo}>
        <source src={video} type="video/mp4"/>
      </video>
      <div className='sub-items'>
      {
        items.map((e,i)=> <div className='sub-item' key={i}>{e}</div>)
      }
      </div>
    </div>
  )
}

export default SingleSection