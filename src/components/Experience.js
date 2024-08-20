import React from 'react'

import generalAssembly from '../assets/generalassembly.png'
import bristol from '../assets/bristol.png'
import vovi from '../assets/vovi-logo.png'
import codeFirstGirls from '../assets/codefirstgirls.png'
import spotify from '../assets/spotify.png'

function Experience() {
  return (

    <div className="experience-section" id="experience">
      <h1 >experience.</h1>
      <div className="experience-divs">
        <div className="experience-div">
          <div className="experience-div-header">
            <img src={spotify} alt="sharebnb-pic"></img>
            <h3>Spotify</h3>
            {/* <p>London, UK</p> */}
          </div>
          <div className="experience-div-text" >
            <p className="experience-title">Associate Engineer</p>
            <p>Sept 2021 - Present</p>
            <ul>
              <li>Joined Spotify as part of the Tech Fellowship Programme - a programme aimed at helping aspiring engineers who have taken an unorthodox route into the tech industry (eg. self-taught or bootcamp graduates).</li> 
              <li>After completing the three-month programme, which consisted of an onboarding, project and embed phase respectively, I was able to secure a full-time position as an Associate Engineer.</li> 
            </ul>
          </div>
        </div>
        <div className="experience-div">
          <div className="experience-div-header">
            <img src={generalAssembly} alt="sharebnb-pic"></img>
            <h3>General Assembly</h3>
          </div>
          <div className="experience-div-text" >
            <p className="experience-title">Teaching Assistant</p>
            <p>Jun 2021 - Sept 2021</p>
            <ul>
              <li>After finishing the General Assembly SEI course in February, I was asked to be a teaching assistant on the new SEI Flex course, a part time version of the same course I had completed. </li>
              <li>Acted as the sole assistant to the lead instructor of the course. Helped students with the content of the course: helped out in labs during the lesson, reviewed code written outside of class and helped with general admin tasks.</li>
            
            </ul>
          </div>
        </div>
        <div className="experience-div">
          <div className="experience-div-header">
            <img src={codeFirstGirls} alt="code-first-girls-logo"></img>
            <h3>Code First Girls</h3>
          </div>
          <div className="experience-div-text" >
            <p className="experience-title">Teaching Assistant</p>
            <p>May 2021 - Jul 2021</p>
            <ul>
              {/* <li>1st Class Honours</li> */}
              <li>Having done the Code First Girls 'Intro to Web Development' course myself a few years ago, I was keen to help on a course which had inspired me to start my journey in tech.</li>
              <li>I was a teaching assistant for the duration of an 8-week course, where we taught around 30 students HTML, CSS & Javascript.</li>
              <li>I was the lead instructor for two of the lessons. Through teaching and explaining key concepts, I was able to cement my knowledge around the fundamentals of HTML, CSS & Javascript. </li>
            </ul>
          </div>
        </div>


      </div>
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