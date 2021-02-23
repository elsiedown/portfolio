import React from 'react'
// import logo from '../assets/logo-elsie.png'

function Title() {
  return (
    <div className="title-section">
      {/* <img src={logo} alt="logo"></img> */}
      <div className="title-text">
        <h1>Elsie Down</h1>
        <h1>· Junior Software Engineer · London ·</h1>
        <a href="#about"><i class="fas fa-chevron-down pulse"></i></a>
      </div>
    </div >
  )
}

export default Title