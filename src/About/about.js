import React, { useEffect } from 'react';
import picOfMe from '../styles/images/27913060_1565772086832529_5472688748384296146_o.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  
  useEffect(() => {
    Aos.init({ duration: 1300});
  }, [])
  return (
    <div className="About">
      <div className="about-header">
        <h2 data-aos="fade-down">About Me</h2>
        <span className="about-decoration"></span>
      </div>

      <div className="about-body">
        <div className="main-content">
          <div data-aos="fade-down" className="img-container">
            <img src={picOfMe} alt='Pic of Me' />
          </div>
          <div data-aos="fade-down" className="content">
            <h2>Full Stack Developer</h2>
            <p>
              My name is Cole, I love to learn new things and create awesome UI/UX. I am a Full Stack 
              developer with a focus on Front End development. If I'm not hacking at a keyboard, I'm 
              probably with my dogs or dressed up as Spider-Man in an obscure location.
            </p>

            <div className="skills">
                <h3>Skills</h3>
                <ul>
                  <li>Javascript<span className="skill-time"> - 2 years</span></li>
                  <li>Typescript<span className="skill-time"> - 1 year</span></li>
                  <li>C#<span className="skill-time"> - 1 year</span></li>
                  <li>Angular 2<span className="skill-time"> - 1 year</span></li>
                  <li>React<span className="skill-time"> - 2 years</span></li>
                  <li>Redux<span className="skill-time"> - 2 years</span></li>
                  <li>SQL<span className="skill-time"> - 2 years</span></li>
                  <li>CSS/LESS/SASS<span className="skill-time"> - 2 years</span></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
