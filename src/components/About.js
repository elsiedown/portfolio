import React from 'react'
import profileImage from '../assets/elsiepic.jpeg'

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

    </div>
  )
}

export default About