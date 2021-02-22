import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className="contact-section">
    <h1 id="contact">contact.</h1>
    <ul className="contact-list">
      <p>Feel free to get in touch!</p>
      {/* <li><a href="mailto:elspethdown@gmail.com">elspethdown@gmail.com</a></li> */}
      <div className="contact-item">
      <a href="https://github.com/elsiedown"><i class="devicon-github-original"></i></a>
      
      {/* <li><a href="https://github.com/elsiedown">github/elsiedown</a></li> */}

      <a href="https://www.linkedin.com/in/elsiedown/"><i class="devicon-linkedin-plain" ></i></a>
      <a href="mailto:elspethdown@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fa-icon"/></a>
      {/* <li><a href="https://www.linkedin.com/in/elsiedown/">linkedin/elsiedown</a></li> */}
      </div>
    </ul>
    <footer className="footer">
      <p>Made by Elsie Down</p>
      <p>&copy; 2021</p>
    </footer>
    </div>

  )
}

export default Contact