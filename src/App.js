import React from 'react'
import Section from './Components/Sections/Section'
// import Video from './Components/Video'
import data from './data/data.json'

const App = () => {
const list = data.scrolldata
    return (
    <div>
    {/* <Video /> */}
    <Section list={list}/>
    </div>
  )
}

export default App