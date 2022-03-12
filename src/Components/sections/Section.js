import React from 'react'
import SingleSection from '../SingleSection/SingleSection'
import './Section.css'

const Section = ({ list }) => {
    return (
        <div className='section'>
            {
                list.map((item) => {
                    return <SingleSection key={item.id} item={item}/>
                })
            }
        </div>
    )
}

export default Section