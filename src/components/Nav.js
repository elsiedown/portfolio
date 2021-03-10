import React from 'react'
// import { Link, useLocation } from 'react-router-dom'




function Nav() {

  // const [isOpen, setIsOpen] = React.useState(false)
  // // const { pathname } = useLocation()


  // const handleMenuToggle = () => {
  //   setIsOpen(!isOpen)
  // }

  // React.useEffect(() => {
  //   setIsOpen(false)
  // }, [])






  return (
    <>
      <ul className="nav-bar">
        {/* <a href="#title"><li className="home-button">ED</li></a> */}
        <a href="#about"><li>about.</li></a>
        <a href="#skills"><li>skills.</li></a>
        <a href="#projects"><li>projects.</li></a>
        <a href="#experience"><li>experience.</li></a>
        <a href="#contact"><li>contact.</li></a>
      </ul>
      {/* <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <span onClick={handleMenuToggle} className={`navbar-burger ${isOpen ? 'is-active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <ul>
                <a href="#about"><li className="navbar-item">about.</li></a>
                <a href="#skills"><li className="navbar-item">skills.</li></a>
                <a href="#projects"><li className="navbar-item">projects.</li></a>
                <a href="#experience"><li className="navbar-item">experience.</li></a>
                <a href="#contact"><li className="navbar-item">contact.</li></a>
              </ul>
            </div>

          </div>
        </div>
      </nav> */}
    </>

  )
}

export default Nav