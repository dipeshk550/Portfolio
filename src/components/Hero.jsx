/*import React from "react";
import dipesPic from "../assets/dipes.jpg";
import "../App.css";


function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-pic">
          <img src={dipesPic} alt="Dipesh Karki" />
        </div>
        <h1>Dipesh Karki</h1>
        <p className="tagline">Aspiring Frontend Developer | React JS Learner</p>
        <p className="desc">Hello, My name is Dipesh Jung Karki, Passionate about 
            creating beautiful and functional web experiences. Currently mastering 
            React JS and modern web technologies.</p>
            <button onClick={()=> document.getElementById("about").scrollIntoView({behavior:"smooth"})}>
                Explore My Journey
            </button>
            
      </div>
    </section>
  );
}
export default Hero;*/

import React from "react";
import dipesPic from "../assets/dipes.jpg"; 
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import "../App.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        {/* Profile Image */}
        <div className="profile-pic">
          <img src={dipesPic} alt="Dipesh Karki" />
        </div>

        {/* Name and Description */}
        <h1>Dipesh Karki</h1>
        <p className="tagline">Aspiring Frontend Developer | React JS Learner</p>
        <p className="desc">
          Hello, my name is Dipesh Jung Karki, passionate about creating
          beautiful and functional web experiences. Currently mastering React JS
          and modern web technologies.
        </p>

        {/* Explore Button */}
        <button
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore My Journey
        </button>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://github.com/dipeshk550" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/dipesh-karki-86ba641a0/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.youtube.com/@dipeshjungkarki" target="_blank" rel="noreferrer">
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

