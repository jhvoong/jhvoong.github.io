import React from 'react'
import NavBar from './NavBar'
import SWFImage from '../assets/songswithfriends-min.jpg'

export default function BitProject() {
  return (
    <>
      <NavBar />
      <article className="project-page">
        <header>
          <img src={SWFImage} alt="Healthyu" />
          <h1>Project Name: Songs with Friends</h1>
          <h3>ECS 162 Final Project</h3>
          <p>NOTE: The spotify API is valid for premium users only and my premium status has expired, so the demo will not work sorry.</p>
          Source: <a href="https://glitch.com/edit/#!/comfortable-ivory-suede?path=README.md%3A1%3A0">https://glitch.com/edit/#!/comfortable-ivory-suede?path=README.md%3A1%3A0</a>
        </header>
        <main>
          {/* introduction */}
          <section>
            <h2>Background</h2>
            <h3>Problem</h3>
            <p>
              Listening to music with others is a breeze when everyone's together in the same location. However, with COVID-19 forcing many of us to be miles away from friends and family, listening to a song together at the same time can be a challenge.
            </p>
            <h3>Solution</h3>
            <p>
              During the COVID-19 crisis, I developed a web app to solve this problem by allowing friends to listen to a song in real-time. This means that two different people can listen to the same exact part of a song in in real-time.
            </p>
          </section>

          {/* process */}
          <section>
            <h2>Process</h2>
            <h3>The usual flow:</h3>
            <ol>
              <li>
                Host joins room and gets the playlist.html page
              </li>
              <li>
                Host adds track and the track is added to the track list for that user
              </li>
              <li>
                Another user joins through the same exact method, but they are served the guest.html page.
              </li>
              <li>
                Immediately, the first track the Host added starts playing for both users.
              </li>
              <li>
                When the track finishes for the host, both host and guest either remain idle until a track is added (then that track starts playing), or the next track in the list starts playing and the host and guest's copy of the tracks remove the track on the top of the list
              </li>
              <li>
                If any subsequent user joins (we tested up to 3 users including the host), then they are served the guest.html and start playing from wherever the host's player position is at.
              </li>
            </ol>
            <h3>Technologies Used</h3>
            <ol>
              <li>Spotify Player API <a href="https://developer.spotify.com/documentation/web-api/reference/player/">https://developer.spotify.com/documentation/web-api/reference/player/</a></li>
              <li>HTML5/CSS3 and Javascript (Frontend)</li>
              <li>ExpressJS (Backend)</li>
              <li>sqlite3 (Database)</li>
            </ol>
          </section>

          {/* Challenges */}
          <section>
            <h2>Major Challenges</h2>
            <ul>
              <li>
                We were inexperienced in the Spotify API and API calls in general, so it took some time for us to debug why some calls were failing. We used Postman to speed up the debugging process.
            </li>
              <li>
                Implementing the chat API was difficult for us because we were not too familiar with Express.
            </li>
            </ul>
          </section>

          {/* conclusion */}
          <section>
            <h2>Takeaways and Moving Forward</h2>
            <p>I gained invaluable experience with Express, API calls, and how a naive chat could work.</p>
            <p>Speaking from the future, I wish I could have made this project using more scalable technologies and strategies. This included:</p>
            <ul>
              <li>
                WebRTC instead of server-side chat message handling. This would be more secure as WebRTC is Peer-to-Peer and does not involve a server
              </li>
              <li>
                ReactJS instead of vanilla HTML/CSS and Javascript because I had to duplicate code to dynamically generate DOM elements.
              </li>
              <li>
                Firebase or a postGREs database rather than a local development database.
              </li>
            </ul>
          </section>
        </main>
      </article>
    </>
  )
}