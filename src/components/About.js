import React from 'react'



import profileImage from '../assets/elsiepic.jpeg'
import lotus from '../assets/lotus.png'
import globe from '../assets/globe2.png'

function About() {
  return (
    <div className="about-section">
      <h1 id="about">about.</h1>
      <div className="about-info">
        <div className="about-pic">
          <img src={profileImage} alt="logo" className="profile-image"></img>
        </div>
        <div className="about-text">
          <p className="about-intro">Hello! I'm Elsie, a Junior Software Engineer.</p>
          <p>Studying modern languages at university sparked my interest in the complex ways we communicate – and the role the digital world plays in that. Soon after I left university, I completed an introductory coding course with Code First: Girls to further explore the links between tech and languages.</p>
          <p>A year later, and still intrigued by the stimulating nature of coding, I decided to enrol in General Assembly’s Software Engineering Immersive course; keen to follow my passion for the industry and excited about the opportunities beyond the course. I am now eager to work in a creative and collaborative environment, where I will be encouraged to stretch my abilities, as well as contribute my love for learning modern technologies and languages.</p>
        </div>

      </div>
      <div className="interests">
        <div className="interests-div">
          <div className="interests-pic">
            <a href="https://open.spotify.com/user/elsie_down?si=XfFKC6jcQqKTIKha69euYQ&nd=1"><i class="fa fa-spotify blue-color " ></i></a>
          </div>
          <div className="interests-text">
            <p>I make monthly playlists on <a href="https://open.spotify.com/user/elsie_down?si=XfFKC6jcQqKTIKha69euYQ&nd=1"><span>Spotify.</span></a></p>
          </div>
        </div>
        <div className="interests-div">
          <div className="interests-pic">
            <img src={globe} alt="logo" className="profile-image"></img>
          </div>
          <div className="interests-text">
            <p>I love travelling and learning languages - especially Spanish. I lived in Medellín for 6 months as part of my University degree.</p>
          </div>
        </div>
        <div className="interests-div">
          <div className="interests-pic">
          <img src={lotus} alt="logo" className="profile-image"></img>
          </div>
          <div className="interests-text">
          <p>I try to practice yoga every day.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About