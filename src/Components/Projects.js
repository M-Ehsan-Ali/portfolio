import React from "react";
import {
  default as pearEdgeImg,
  default as provisioningImg,
  default as stitchImg,
} from "../Assets/projects/peeredge.png"; // Ensure paths are correct
import pickleTourImg from "../Assets/projects/pickletour.png"; // Ensure paths are correct
import strettoImg from "../Assets/projects/stretto.png"; // Ensure paths are correct
import "./projects.css";

const projects = [
  {
    title: "PeerEdge",
    description:
      "PeerEdge is a cloud-based solution designed to enhance call connectivity with comprehensive control and real-time analytics. This platform simplifies the management of voice and data WAN functions by consolidating them into a single interface. It ensures scalability without the need for complex configurations and offers full visibility through the PeerEdge Portal. Key features include vendor and customer relationship management, detailed reporting, recording settings, latency reports, and advanced call control mechanisms.",
    link: "https://hcc-dev.peeredge.com/",
    image: pearEdgeImg,
  },
  {
    title: "Stitch",
    description:
      "Stitch is a unified platform designed to manage global connectivity and empower IT leaders with robust digital infrastructure and business solutions. It is capable of handling over 50,000 voice calls per second, ensuring flawless connections for global enterprises. The platform provides comprehensive analytics and automation to support secure and efficient interconnections worldwide. Stitch acts as a bridge between vendors and customers, offering support for VOIP and voice services.",
    link: "https://stitch-ebs-dev.46labs.com/",
    image: stitchImg,
  },
  {
    title: "Provisioning",
    description:
      "Provisioning is a versatile platform that bridges the gap between legacy communication systems and modern solutions. It provides administrators with complete control over voice and data services, real-time analytics, and traffic management. This platform enhances global communication services by offering seamless integration and management of both legacy and modern systems. It also provides administrative control over other platforms like Stitch and PeerEdge.",
    link: "https://prov-dev.peeredge.com/",
    image: provisioningImg,
  },
  {
    title: "Stretto",
    description:
      "Stretto is a specialized digital solution tailored for bankruptcy management. It meets the complex needs of financial professionals by providing tools for overseeing and managing bankruptcy cases efficiently. The platform emphasizes precision, security, and accuracy in handling financial transactions and records. Key functionalities include debt tracking, asset allocation, and comprehensive reporting to ensure reliable bankruptcy management and resolution.",
    link: "https://www.stretto.com/",
    image: strettoImg,
  },
  {
    title: "MegaMind Admin Panel",
    description:
      "The MegaMind Admin Panel is a web-based application designed for managing home tuition systems. It enables tutors and tutees to manage their accounts effectively. The platform includes features for job management, monthly billing (both prepaid and postpaid), class scheduling, and cancellation. Additionally, it offers communication tools such as chat and file-sharing between tutors and tutees, and a support chat for interactions between the admin lead and end-users.",
    link: "https://megamind-admin.netlify.app",
    image: pickleTourImg,
  },
  {
    title: "Pickle Tour LLC",
    description:
      "Pickle Tour LLC is a tournament management system specifically for organizing and managing pickleball games. The system allows organizers to publish events and provide detailed information for player registration. It also features real-time score management by referees, ensuring accurate and timely tracking of game scores and results. The platform facilitates efficient event management and enhances the overall tournament experience for players and organizers.",
    link: "https://www.pickletour.com/",
    image: pickleTourImg,
  },
];

const Projects = () => (
  <section className="projects">
    {projects.map((project, index) => (
      <div key={index} className="project">
        <div className="project-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
        <div className="project-img-container">
          <img
            src={project.image}
            alt={project.title}
            className="project-img"
          />
        </div>
      </div>
    ))}
  </section>
);

export default Projects;
