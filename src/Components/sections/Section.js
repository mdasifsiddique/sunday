import React,{useState} from 'react'
import SingleSection from '../single-section/SingleSection'
import './Section.css';
import video1 from './video-1.mp4';

const Section = ({ list }) => {
    const [path,setpath]= useState("")
    return (
        <div className='section'>
            <video>
                <source src={video1}></source>
            </video>
            <div className='content'>

            {
                list.map((item) => {
                    return <SingleSection prop={path} key={item.id} item={item}/>
                })
            }
            </div>
        </div>
    )
}

export default Section

//parent relative
//children absolute ( top left bottom )