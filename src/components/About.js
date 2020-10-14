import React from 'react'

import NavBar from './NavBar'
import JohnVoong from '../assets/JohnVoong-min.png'


export default function About() {
  return (
    <>
      <NavBar />
      <div className="about-page">
        <img className="john-voong" alt={"John Voong"} src={JohnVoong} />
        <div className="about-text">
          <h1>About me</h1>
          <p>
            Hi! I'm John, an aspiring software engineer who enjoys web development on his free time!<br />
            I recently graduated from UC Davis with a BS in Computer Science Engineering.Currently taking part of the Wonsulting 2020 Project
          </p>
        </div>
      </div>
    </>
  )
}