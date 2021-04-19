import React from 'react';
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="Home">
        <div class="main-header">
          <span className="name">Cole Gonzales</span>

          <div className="dynamo-text">
            <span className="dynamo-prefix">I am</span>

            <span className="dynamo-content">
              <Typewriter
                onInit={(typewriter)=> {
                typewriter.typeString("a Developer.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("a UX enthusiast.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("a life long student.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("a super hero nerd.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("a dog Dad.")
                .pauseFor(1000)
                .deleteAll()
                .typeString("a Software Engineer.")
                .start();
                }}
              />
            </span>
          </div>
        </div>
    </div>
  )
}

export default Home;
