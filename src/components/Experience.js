import React from 'react'

import generalAssembly from '../assets/generalassembly.png'
import bristol from '../assets/bristol.png'
import vovi from '../assets/vovi-logo.png'

function Experience() {
  return (

    <div className="experience-section" id="experience">
      <h1 >experience.</h1>
      <div className="experience-divs">
        <div className="experience-div">
          <div className="experience-div-header">
            <img src={generalAssembly} alt="sharebnb-pic"></img>
            <h3>General Assembly</h3>
            {/* <p>London, UK</p> */}
          </div>
          <div className="experience-div-text" >
            <p className="experience-title">SEI Course</p>
            <p>Nov 2020 - Feb 2021</p>
            <ul>
              <li>Developed proficiency in building full-stack apps: 12-week software engineering immersive course that furthered my programming knowledge (especially JavaScript, React.js, HTML and CSS).</li> 
              <li>Demonstrated team working capibility - worked in pairs and groups during labs and projects.</li> 
              <li>Delivered consistently strong results in time-pressured environment: built four fully-functioning and presentable projects all within timeframes of a week or two days.</li>
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
              <li>Created social media content for different clients, working alongside graphic designers to come up with innovative and interesting ideas. </li>
              <li>Co-devised marketing strategies: personally developed a strategy for a school design competition and coinciding video teaser campaign.</li>
              <li>Developed an interest and appreciation for the process and impact of building beautifully crafted websites.</li>
            </ul>
          </div>
        </div>
        <div className="experience-div">
          <div className="experience-div-header">
            <img src={bristol} alt="bristol-logo"></img>
            <h3>Bristol University</h3>
          </div>
          <div className="experience-div-text" >
            <p className="experience-title">BA French and Spanish (1st Class Hons)</p>
            <p>Sept 2015 - Jul 2019</p>
            <ul>
              {/* <li>1st Class Honours</li> */}
              <li>Developed advanced proficiency in language and communication skills, with fluency in French and Spanish.</li>
              <li>Achieved high 1st class honours in my fourth-year dissertation, written about the role of digital art in politics and culture.</li>
              <li>Budding international marketing proficiency: developed skills of digital marketing (social media & website design) and client relationships in year abroad placements at Savills France in Paris, France and Pangea Vivienda in Medellin, Colombia</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Experience