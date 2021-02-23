import React from 'react'

import generalAssembly from '../assets/generalassembly.png'
import bristol from '../assets/bristol.png'
import vovi from '../assets/vovi-logo.png'

function Experience() {
  return (

    <div className="experience-section">
      <h1 id="experience" >experience.</h1>
      <div className="experience-divs">
        <div className="experience-div">
          <div className="experience-div-header">
            <img src={generalAssembly} alt="sharebnb-pic"></img>
            <h3>General Assembly</h3>
            {/* <p>London, UK</p> */}
          </div>
          <div className="experience-div-text" >
            <p className="experience-title">Software Engineering Immersive Course</p>
            <p>Nov 2020 - Feb 2021</p>
            <ul>
              <li>12-week immersive course that helped me further my programming knowledge (especially in JavaScript, React.js, HTML and CSS) and where I learnt to build full-stack apps. Involving daily stand-ups, online-lessons, labs, pair-coding and group and individual projects.</li>
              <li>For full project breakdown please view the projects section above.</li>
            </ul>
          </div>
        </div>
        <div className="experience-div">
          <div className="experience-div-header">
            <img src={vovi} alt="sharebnb-pic"></img>
            <h3>Vovi Studio</h3>
          </div>
          <div className="experience-div-text" >
            <p className="experience-title">Account Manager</p>
            <p>Jul 2020 - Aug 2020</p>
            <ul>
              <li>Developed social media content for different clients, working alongside graphic designers to come up with innovative and interesting ideas. </li>
              <li>Co-devised marketing strategies: personally developed a strategy for a school design competition and coinciding video teaser campaign.</li>
            </ul>
          </div>
        </div>
        <div className="experience-div">
          <div className="experience-div-header">
            <img src={bristol} alt="bristol-logo"></img>
            <h3>Bristol University</h3>
          </div>
          <div className="experience-div-text" >
            <p className="experience-title">French and Spanish Joint BA</p>
            <p>Sept 2015 - Jul 2019</p>
            <ul>
              <li>1st Class Honours</li>
              <li>Fourth-year dissertation written about the role of digital art in culture and politics.</li>
              <li>Year Abroad in Paris and Medellin.</li>
              <li>Marketing placement in Medellin at Pangea Vivienda - a student accommodation start-up.</li>
              <li>Marketing placement in Paris at Savills France.</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Experience