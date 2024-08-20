import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className="contact-section" id="contact">
      <h1>contact.</h1>
      <ul className="contact-list">
        <p>Please feel free to check out my Github or get in touch for more information!</p>
        {/* <li><a href="mailto:elspethdown@gmail.com">elspethdown@gmail.com</a></li> */}
        <div className="contact-item">
          <a href="https://github.com/elsiedown"><i class="devicon-github-original"></i></a>

          {/* <li><a href="https://github.com/elsiedown">github/elsiedown</a></li> */}

          <a href="https://www.linkedin.com/in/elsiedown/"><i class="devicon-linkedin-plain" ></i></a>
          <a href="mailto:elspethdown@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="fa-icon" /></a>
          <a href="https://open.spotify.com/user/elsie_down?si=XfFKC6jcQqKTIKha69euYQ&nd=1"><i class="fa fa-spotify blue-color " ></i></a>
          {/* <li><a href="https://www.linkedin.com/in/elsiedown/">linkedin/elsiedown</a></li> */}
        </div>
      </ul>
    </div>

  )
}

export default Contact