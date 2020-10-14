import React from 'react'

import NavBar from './NavBar'

import TechStack from '../assets/healthyuTechStack.png'

import UCDavisHealthImage from '../assets/healthyu.jpg'


export default function HealthyU(props) {
  return (
    <>
      <NavBar />
      <article className="project-page">
        <header>
          <img src={UCDavisHealthImage} alt="Healthyu" />
          <h1>Project Name: HealthyU</h1>
          <h3>Clients: <a href="https://faculty.engineering.ucdavis.edu/joshi/">Professor Sanjay Joshi</a> and <a href="https://citris-uc.org/person/tod-stoltz/">Mr. Tod Stoltz</a>
          </h3>
          </header>
        <main>
          {/* introduction */}
          <section>
            <h2>Background</h2>
            <p>
              Senior citizens can access the internet for a surplus of health information regarding health conditions. However, much of that information is unreliable or not verified by health professionals.
            </p>
            <h3>Problem</h3>
            <p>
              The UC Davis Health department (in collaboration with the UC Davis MAE) plans to build senior retirement homes and wants an attractive, easy-to-use means of getting verified health information. The overall goal is to <strong>get senior citizens to gain a new, healthy perspective on life</strong> through the application. They should feel at ease when using technology to learn more about specific conditions or get tips on healthy living.
            </p>
            <h3>Solution</h3>
            <p>We developed a progressive web app <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps">(PWA)</a> called HealthyU to answer this. HealthyU is a web-based user interface tool which stores and displays evidence-based information on health and wellness from credible sources.</p>
          </section>

          {/* process */}
          <section>
            <h2>Process</h2>
            <h3>Features</h3>
            <p>Our team was in charge of coming up with our own ideas, from layout to finished product. It was a 4 month-long project, and we met every two weeks with our client for feedback. Features include:</p>
            <ol>
              <li>Interactive body diagram</li>
              <li>Mascot helper</li>
              <li>Blog printing</li>
              <li>Form to add/remove more posts.</li>
              <li>Like/dislike system of content.</li>
              <li>Timer to check for inactivity.</li>
            </ol>
            <figure>
              <picture>
                <img src={TechStack} alt="Healthyu" />
              </picture>
              <figcaption>Overview of the tech stack</figcaption>
            </figure>
          </section>

          {/* Challenges */}
          <section>
            <h2>Major Challenges</h2>
            <p>
              The project itself required major commitment to pull through because none of us had any web development experience with ReactJS. Additionally, only two of us had some web development experience in general.
            </p>
          </section>

          {/* conclusion */}
          <section>
            <h2>Takeaways and Moving Forward</h2>
            <p>This project was the start of an amazing product, but unfortunately we had to hand it off so another team could build upon it. Some lessons I learned from this experience included:</p>
            <ul>
              <li>ReactJS experience with a client (lifecycle, class-based components)</li>
              <li>Knowing thy audience (the elderly)</li>
              <li>Knowing thy teammates (talking out disputes together)</li>
              <li>Working with a designer</li>
              <li>Cross-compatability issues</li>
              <li>Responsivity with ReactJS (large + small screens)</li>
              <li>Video Streaming for HLS vs DASH</li>
            </ul>
          </section>
        </main>
      </article>
    </>
  )
}