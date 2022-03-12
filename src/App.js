import React from 'react'
import Section from './Components/sections/Section.js'
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