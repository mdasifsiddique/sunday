import React,{useState} from 'react'
import SingleSection from '../single-section/SingleSection'
import './Section.css';



let initialPath = "./videos/video-5.mp4" ;

const Section = ({ list }) => {
    const [path,setPath]= useState("./videos/video-1.mp4");
    console.log("line 9 " + path);
        return (
        <div className='section'>
            <video  controls muted autoPlay loop className='videoSection'>
                <source src={require(`${path}`)} type="video/mp4"></source>
            </video>
            {
                console.log("im here")
            }
            <div className='content'>

            {
                list.map((item) => {
                    return <SingleSection setPath={setPath} key={item.id} item={item}/>
                })
            }
            </div>
        </div>
    )
}

export default Section

//parent relative
//children absolute ( top left bottom )