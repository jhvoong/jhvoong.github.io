import React, { useState, useEffect } from 'react';

import NavBar from './NavBar';
import JohnVoong from '../assets/JohnVoong-min.png';
import Fade from './Fade';

export default function About() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow((prev) => !prev);
  }, []);
  return (
    <>
      <NavBar />
      <Fade show={show}>
        <div className='about-page'>
          <div className='profile-container'>
            <img
              className='profile-container__img'
              alt={'John Voong'}
              src={JohnVoong}
            />
          </div>
          <div className='about-text'>
            <h1>About me</h1>
            <p>
              Hi! I'm John, a software engineer who enjoys web development on
              his free time!
              <br />I recently graduated from UC Davis with a BS in Computer
              Science Engineering. What I'm currently working on during this
              COVID-19 pandemic:
            </p>
            <ul className='wip-list'>
              <li>
                WebRTC video calling application using Golang's{' '}
                <a href='https://github.com/pion/webrtc'>pion library</a> with a
                group of friends
              </li>
              <li>
                A bugtracker application using an{' '}
                <a href='https://spring.io/'>MVC framework</a>
              </li>
              <li>LeetCode</li>
              <li>Remaining positive</li>
            </ul>
          </div>
        </div>
      </Fade>
    </>
  );
}
