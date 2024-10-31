import Spline from '@splinetool/react-spline';
import ProjectsCard from "./Components/ProjectsCard";
import {projects} from "./Data";
import "./projects.css";
const Projects = () => {
  return (
    <section id="projectSection">
      <div className="spline-container">
        <Spline scene="https://prod.spline.design/mi2t9oA60A-fVSWu/scene.splinecode" />
      </div>
      <div className="content-container">
        <p className="projectIntro">Our Work</p>
        <div className="projectContainer">
          {projects.map((project) => (
            <ProjectsCard
              key={project.id}
              name={project.title}
              img={project.image}
              desc={project.description}
              live={project.liveLink}
              github={project.githubLink}
              alt={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
