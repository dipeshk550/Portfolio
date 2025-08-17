//components Experience js
import React from "react";
import "../App.css"

function Experience(){
    const exp=[
        {role:"Operation Manager", company:"BR Codex Pvt Ltd",year:"2023-2025", desc:"Managing operations and overseeing project development processes."},
        {role:"Intern", company:"Vianet Communication", year:"2023", desc: "L1 Support, TroubleShoot"},
        {role: "WordPress Developer", company: "Freelance", year: "Multiple", desc: "Developed and customized WordPress websites for clients." }
    ];
    return(
        <section id="experience" className="section gray">
            <h2>Experience</h2>
            <div className="timeline">
                {exp.map((job,i)=>(
                    <div key={i} className="timeline-item">
                        <h3>{job.role}</h3>
                        <p>{job.company}</p>
                        <span>{job.year}</span>
                        <p>{job.desc}</p>
                        </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;