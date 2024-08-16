import React from "react";

const Skills = () => (
  <section className="skills">
    <h2>Skills & Technologies</h2>
    <div className="skills-list">
      <div className="skill">
        <h3>Front-End Technologies</h3>
        <ul>
          <li>React JS</li>
          <li>Next JS</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Tailwind CSS</li>
          <li>Material UI</li>
          <li>Ant Design</li>
          <li>Redux, Redux Saga, Redux Toolkit</li>
        </ul>
      </div>
      <div className="skill">
        <h3>Back-End Technologies</h3>
        <ul>
          <li>Node JS</li>
          <li>MySQL</li>
          <li>RESTful APIs</li>
        </ul>
      </div>
      <div className="skill">
        <h3>Tools & Platforms</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>Docker</li>
          <li>Netlify</li>
          <li>Postman</li>
          <li>Swagger</li>
          <li>Jira</li>
          <li>Asana</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Skills;
