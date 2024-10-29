import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Work from './components/Work'
import Education from './components/Education'
import Contact from './components/Contact'
import Fotter from './components/Fotter'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Work/>
      <Education/>
      <div className="my-20"/>
      <Contact/>
      <Fotter/>

    </div>
  )
}

export default App
