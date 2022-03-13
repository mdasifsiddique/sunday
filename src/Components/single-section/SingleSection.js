import React, { useEffect } from 'react'
import { useState } from 'react';

import './SingleSection.css'



const SingleSection = ({ item, setPath }) => {
  const { id, title, subtitle, items } = item
  const playVideo = (e) => {
    // e.target.play()
    // console.log(e.target);
    // console.log("On");
  }
  const pauseVideo = (e) => {
    // e.target.stop()
    // console.log(e.target);
    // console.log("Off");
  }
   function PlayVideo(path){
     
    setPath(path);
    // console.log(path);
    // video.play();
   }


  return (
    <div className='section-container' onMouseEnter={()=>PlayVideo(item.video)} >
      {/* <video controls autoPlay width="100%" height="100%">
        <source src = {require(`${item.video}`)} type='video/mp4' ></source>
  
      </video> */}

      <div className='frontOfVideo'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className='sub-items'>
          {
            items.map((e, i) => <div className='sub-item' key={i}>{e}</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default SingleSection