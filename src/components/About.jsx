//components About
import React from "react";
import "../App.css";


function About(){
    return(
        <section id="about" className="section">
            <h2>About Me</h2>
            <div className="about-grid">
            <div>
             <h3>Hello! I'm Dipesh</h3>
            <p>I'm an enthusiastic aspiring Frontend Developer from Lalitpur. 
            My journey in technology started with a passion for creating beautiful 
            and functional digital experiences.</p>
            <p>Currently, I'm diving deep into React JS and modern web development practices. 
            My goal is to become a skilled Frontend Developer who can bring creative ideas to life.
            </p>
            <div className="about-cards">
                <div className="card"><h4>Learning</h4><p>React Js</p></div>
                <div className="card"><h4>Goal</h4><p>FrontEnd Developer</p></div>
                <div className="card"><h4>Experience</h4><p>Web Projects</p></div>
                <div className="card"><h4>Education</h4><p>BCA Graduate</p></div>
            </div>

            </div>
            </div>
        </section>
    )
}
export default About;