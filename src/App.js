import React from 'react'

import Nav from './components/Nav'
import Title from './components/Title'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
  <section className="main-layout">
    <Nav />
    <section className="sections-layout">
    <Title />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact /> 
    </section>
  </section>
  )
}

export default App
