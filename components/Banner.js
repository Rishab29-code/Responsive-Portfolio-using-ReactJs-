import React from "react";
import person from '../images/portfolioupload.png';

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src={person} alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Rishab Sharma</h6>
            <h3>Web Developer</h3>
            <p>
             I am <b>Full-Stack</b> Developer with an emphasis on responsive web design
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;