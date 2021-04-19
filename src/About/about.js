import React from 'react';
import picOfMe from '../styles/images/27913060_1565772086832529_5472688748384296146_o.jpg';

function About() {
  return (
    <div className="About" style={{minHeight: "100vh"}}>
      <div className="about-header">
        <h2>About Me</h2>
        <span className="about-decoration"></span>
      </div>

      <div className="about-body">
        <span>
          Hi! My name is Cole, I love to learn and create awesome UI/UX. Skills can be learned, but personality is innate, and I like to think 
          I have plenty of it! If I'm not hacking at a keyboard, I'm probably with my dogs or dressed up as Spider-Man in an obscure location.
        </span>

        <div className="main-content">
          <img src={picOfMe} alt='Pic of Me' />
          <div className="content">
            <h4>Full Stack Developer</h4>
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
