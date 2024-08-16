import React from "react";
import profilePic from "../Assets/profilePic.jpeg";
import "./home.css";

const Home = () => (
  <section className="home">
    <div className="home-content">
      <div className="text-content">
        <h1>Muhammad Ehsan Ali</h1>
        <p>
          I am a dedicated React JS Developer with over 4 years of hands-on
          experience in building high-performance web applications. My passion
          for innovation drives me to stay updated with the latest technologies
          and best practices. I excel at transforming complex requirements into
          scalable solutions and thrive in dynamic team environments.
        </p>
      </div>
      <div className="profile-pic-container">
        <img
          src={profilePic}
          alt="Muhammad Ehsan Ali"
          className="profile-pic"
        />
      </div>
    </div>
  </section>
);

export default Home;
