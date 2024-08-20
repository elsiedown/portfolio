import React from 'react'

import Title from './components/Title'

import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
  <section className="main-layout">
    <section className="sections-layout">
    <Title />
    <Contact /> 
    <Footer />
    </section>
  </section>
  )
}

export default App
