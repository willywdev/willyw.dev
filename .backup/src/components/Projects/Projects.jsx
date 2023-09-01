import "./Projects.css";
import projectsList from "./projectsList";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Relevant Projects</h2>
      {projectsList.map((project) => (
        <a
          href={project.url}
          key={project.id}
          className="projects__wrapper"
          style={{ backgroundColor: project.backgroundColor }}>
          <img
            src={project.img}
            alt={project.name}
            className="projects__logo"
          />
          <article className="projects__project-text">
            <h3 className="projects__headline" style={{ color: project.color }}>
              {project.name}
            </h3>
            <p className="projects__description">{project.description}</p>
            <button type="button" className="projects__repo-button">
              See code
            </button>
          </article>
        </a>
      ))}
    </section>
  );
}
