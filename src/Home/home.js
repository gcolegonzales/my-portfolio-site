import React, { useEffect } from 'react';
import Typewriter from "typewriter-effect";

function Home() {
  useEffect(() => {
    var colors = ['rgba(251, 247, 255, .3)', 'rgba(236, 245, 108, .4)', 'rgba(251, 255, 189, .4)'];
    let listItems = document.getElementsByClassName("circle");
    let liArray = Array.from(listItems);
    liArray.forEach((li) => {
      var random_color = colors[Math.floor(Math.random() * colors.length)];
      li.style.background = random_color;
    });
  }, [])

  return (
    <div className="Home">
      <div class="area" >
        <ul class="circles">
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>
          <li className="circle"></li>

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
                  .typeString("a life long student.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("a UI enthusiast.")
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
        </ul>
      </div>
    </div>
  )
}

export default Home;
