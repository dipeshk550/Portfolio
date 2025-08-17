// components/Projects.js
import React from "react";
import "../App.css";

function Projects(){
    return(
        <section id="projects" className="section">
            <h2>My Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <h3>Airline Reservation System</h3>
                     <p>
            A comprehensive system built with PHP that allows customers to search flights, 
            book tickets, and manage reservations.
                    </p>
                    <a href="#">View Code</a> | <a href="#">Live Demo</a>
                </div>
                <div className="project-card">
                    <h3>College Mangement System</h3>
                     <p>
            A comprehensive system built with PHP that allows customers to search flights, 
            book tickets, and manage reservations.
                     </p>
           <a href="#">View Code</a> | <a href="#">Live Demo</a>
                </div>
            </div>
        </section>
    );
}
export default Projects;