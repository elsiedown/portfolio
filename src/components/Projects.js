import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

import sharebnb from '../assets/sharebnb.png'
import cityspace from '../assets/cityspace.png'
import whatsinthefridge from '../assets/whatsinthefridge2.png'
import littlemermaid from '../assets/littlemermaid.png'

function Projects() {
  return (
    <div className="project-section">
      <h1 id="projects">projects.</h1>
      <div className="project-divs">
        <div className="project-div">
          <div className="project-div-inner">
            <div className="project-div-front">
              <img src={sharebnb} alt="sharebnb-pic" classname="project-div-image"></img>
            </div>
            <div className="project-div-back">
              <h3>Sharebnb</h3>
              <p className="project-group">Pair Project</p>
              <p className="timeframe">Timeframe: 1 week</p>
              <div className="project-links">
                <a href="https://shareb-n-b.herokuapp.com/"><FontAwesomeIcon icon={faLink} className="fa-icon" /></a>
                <a href="https://github.com/elsiedown/sei-project-4-he"><i class="devicon-github-original"></i></a>
              </div>
              <p className="project-description">As a pair, we built a Full-Stack app which was rooted in Python, Django and PostgreSQL back-end. Our idea was Sharebnb, an app which allows users to swap their houses. In this final project, I went further with the relationships between users than I had in previous projects, personally responsible for how the house swap requests were sent between users both on the back-end and front-end.</p>
              {/* <a href="https://github.com/elsiedown/sei-project-4-he">Github</a> */}
              <div className="project-tech-icons">
                <div className="icon-item"><i class="devicon-python-plain"></i></div>
                <div className="icon-item"><i class="devicon-django-plain"></i></div>
                <div className="icon-item"><i class="devicon-react-original"></i></div>
                <div className="icon-item"><i class="devicon-postgresql-plain"></i></div>
                <div className="icon-item"><i class="devicon-javascript-plain"></i></div>
                <div className="icon-item"><i class="devicon-sass-original"></i></div>
                <div className="icon-item"><i class="devicon-github-original"></i></div>
                <div className="icon-item"><i class="devicon-git-plain"></i></div>
                <div className="icon-item"><i class="devicon-heroku-original"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-div">
          <div className="project-div-inner">
            <div className="project-div-front">
              <img src={cityspace} alt="cityspace-pic" classname="project-div-image"></img>
            </div>
            <div className="project-div-back">
              <h3>cityspace</h3>
              <p className="project-group">Group Project (4 People)</p>
              <p className="timeframe">Timeframe: 1 week</p>
              <div className="project-links">
                <a href="https://cityspace.herokuapp.com/"><FontAwesomeIcon icon={faLink} className="fa-icon" /></a>
                <a href="https://github.com/elsiedown/sei-project-3"><i class="devicon-github-original"></i></a>
              </div>
              <p className="project-description">Full-Stack MERN app with CRUD functionality. As a group, we created an app which had the aim of encouraging people to share their favourite outdoor spots in London. We all worked full-stack, but, working on the 'liking' functionality, I particularly focussed on building relationships between users.</p>
              <div className="project-tech-icons">
                <div className="icon-item"><i class="devicon-mongodb-plain-wordmark"></i></div>
                <div className="icon-item"><i class="devicon-express-original"></i></div>
                <div className="icon-item"><i class="devicon-react-original"></i></div>
                <div className="icon-item"><i class="devicon-nodejs-plain"></i></div>
                <div className="icon-item"><i class="devicon-javascript-plain"></i></div>
                <div className="icon-item"><i class="devicon-sass-original"></i></div>
                <div className="icon-item"><i class="devicon-github-original"></i></div>
                <div className="icon-item"><i class="devicon-git-plain"></i></div>
                <div className="icon-item"><i class="devicon-heroku-original"></i></div>
              </div>
              {/* <a href="https://github.com/elsiedown/sei-project-3">Github</a> */}
            </div>
          </div>
        </div>
        <div className="project-div">
          <div className="project-div-inner">
            <div className="project-div-front">
              <img src={whatsinthefridge} alt="whatsinthefridge-pic" classname="project-div-image"></img>
            </div>
            <div className="project-div-back">
              <h3>What's In Your Fridge?</h3>
              <p className="project-group">Pair Project</p>
              <p className="timeframe">Timeframe: 48 hrs</p>
              <div className="project-links">
                <a href="https://whatsinyafridge.netlify.app/"><FontAwesomeIcon icon={faLink} className="fa-icon" /></a>
                <a href="https://github.com/elsiedown/sei-project-2"><i class="devicon-github-original"></i></a>
              </div>
              <p className="project-description">Pair Programming: In two days, we built a React app which used an external API. The project was invaluable in terms of learning to pair-code and being able to share our different strengths and skills.</p>
              <div className="project-tech-icons">
                <div className="icon-item"><i class="devicon-react-original"></i></div>
                <div className="icon-item"><i class="devicon-javascript-plain"></i></div>
                <div className="icon-item"><i class="devicon-html5-plain-wordmark"></i></div>
                <div className="icon-item"><i class="devicon-css3-plain-wordmark"></i></div>
                <div className="icon-item"><i class="devicon-sass-original"></i></div>
                <div className="icon-item"><i class="devicon-github-original"></i></div>
                <div className="icon-item"><i class="devicon-git-plain"></i></div>
              </div>
              {/* <a href="https://github.com/elsiedown/sei-project-2">Github</a> */}
            </div>
          </div>
        </div>
        <div className="project-div">
          <div className="project-div-inner">
            <div className="project-div-front">
              <img src={littlemermaid} alt="littlemermaid-pic" classname="project-div-image"></img>

            </div>
            <div className="project-div-back">
              <h3>Little Mermaid Pacman</h3>
              <p className="project-group">Solo Project</p>
              <p className="timeframe">Timeframe: 1 week</p>
              <div className="project-links">
                <a href="https://elsiedown.github.io/SEI-project-1/"><FontAwesomeIcon icon={faLink} className="fa-icon" /></a>
                <a href="https://github.com/elsiedown/SEI-project-1"><i class="devicon-github-original"></i></a>
              </div>
              <p className="project-description">I had one week to build a grid-based game in JavaScript, HTML and CSS. I decided to challenge myself by choosing PacMan where I cemented my JS fundamental skills and became more familiar with using CSS and HTML.</p>
              <div className="project-tech-icons">
                <div className="icon-item"><i class="devicon-javascript-plain"></i></div>
                <div className="icon-item"><i class="devicon-html5-plain-wordmark"></i></div>
                <div className="icon-item"><i class="devicon-css3-plain-wordmark"></i></div>
                <div className="icon-item"><i class="devicon-github-original"></i></div>
                <div className="icon-item"><i class="devicon-git-plain"></i></div>
              </div>
              {/* <a href="https://github.com/elsiedown/SEI-project-1">Github</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects