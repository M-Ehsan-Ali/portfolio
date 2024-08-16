import React from "react";
import {
  default as pearEdgeImg,
  default as provisioningImg,
  default as stitchImg,
} from "../Assets/projects/peeredge.png"; // Ensure paths are correct
import pickleTourImg from "../Assets/projects/pickletour.png"; // Ensure paths are correct

const Projects = () => (
  <section className="projects">
    <h2>Featured Projects</h2>
    <div className="project">
      <img src={pearEdgeImg} alt="PearEdge" className="project-img" />
      <h3>PearEdge</h3>
      <p>
        Developed a cloud-based switch platform to enhance call connectivity and
        traffic management. Features include real-time analytics, vendor and
        customer management, and a unified control panel for voice and data WAN
        functions.
      </p>
      <a
        href="https://hcc-dev.peeredge.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
    <div className="project">
      <img src={stitchImg} alt="Stitch" className="project-img" />
      <h3>Stitch</h3>
      <p>
        Created a unified platform for global connectivity management, handling
        over 50,000 voice calls per second. The project features robust
        analytics and automation for secure interconnections worldwide.
      </p>
      <a
        href="https://stitch-ebs-dev.46labs.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
    <div className="project">
      <img src={provisioningImg} alt="Provisioning" className="project-img" />
      <h3>Provisioning</h3>
      <p>
        Built a platform to bridge legacy communications with modern solutions,
        providing admins with real-time analytics and control over global voice
        and data services.
      </p>
      <a
        href="https://prov-dev.peeredge.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
    <div className="project">
      <img src={pickleTourImg} alt="Pickle Tour LLC" className="project-img" />
      <h3>Pickle Tour LLC</h3>
      <p>
        Developed a tournament management system for pickleball games, featuring
        real-time score management, event publishing, and player registration
        functionalities.
      </p>
      <a
        href="https://www.stretto.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </div>
  </section>
);

export default Projects;
