 // components/Education.js
import React from "react";
import "../App.css";

export default function Education() {
  const education = [
    { degree: "Bachelor in Computer Application (BCA)", school: "Caribbean College of Management", year: "Graduate" },
    { degree: "+2 HSEB", school: "Caspian Valley College", year: "Completed" },
    { degree: "School Leaving Certificate (SLC)", school: "Sudesha High School", year: "Passed" }
  ];

  return (
    <section id="education" className="section gray">
      <h2>Education</h2>
      <div className="timeline">
        {education.map((edu, i) => (
          <div key={i} className="timeline-item">
            <h3>{edu.degree}</h3>
            <p>{edu.school}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
