import React, { useEffect, useState } from 'react'

import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// local components
import Fade from "./Fade";
import NavBar from './NavBar'
import Project from './Project'

// local images
import BitProjectImage from '../assets/bitproject-min.jpg'
import SongsWithFriendsImage from '../assets/songswithfriends-min.jpg'
import UCDavisHealthImage from '../assets/healthyu-min.jpg'

export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(show => !show)
  }, [])
  
  return (
    <>
      <NavBar />
      <Fade show={show}>
        <header className="home-header">
          <div className="header-text">
            <h1 className="animatedText">John's Portfolio</h1>
            <h2>Software Engineer + Web Developer</h2>
          </div>
        </header>
      </Fade>
      <main className="home-main">
        <Fade show={show}>
          <Project
            title="UCD Health & MAE ReactJS Developer"
            imageFirst={false}
            Image={UCDavisHealthImage}
            imageAlt="UC Davis Health"
            summary="ReactJS developer for UCD Health Dpt. & Mech. Aerospace Engineers Dpt."
            learnMore="/healthyu"
          />
        </Fade>
        <Fade show={show}>
          <Project
            title="Songs with Friends"
            imageFirst={true}
            Image={SongsWithFriendsImage}
            imageAlt="Songs with Friends image"
            summary="Initially a course project, remade/polished from vanilla HTML/CSS/JS to ReactJS, SCSS, PostgreSQL (in progress)"
            learnMore="/swf"
          />
        </Fade>
        <Fade show={show}>
          <Project
            title="Bit Project Flask Developer"
            imageFirst={false}
            Image={BitProjectImage}
            imageAlt="Bit Project Image"
            summary="Web developer and comprehensive curriculum writer for Bit Project"
            learnMore="/bitproject"
          />
        </Fade>
      </main>
      <footer>
        <Fade show={show}>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/jhvoong">
            <GitHubIcon className="link-icon" />
          </a>
        </Fade>
        <Fade show={show}>
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/john-voong7/">
            <LinkedInIcon className="link-icon linkedin" />
          </a>
        </Fade>
        <Fade show={show}>
          <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/john.voong.68">
            <FacebookIcon className="link-icon facebook" />
          </a>
        </Fade>
      </footer>
    </>
  )
}