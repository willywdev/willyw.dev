import "./Projects.css";
import projectsList from "./projectsList";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Relevant Projects</h2>
      {projectsList.map((project) => (
        <a href={project.url} key={project.id} className="projects__wrapper">
          <img
            src={project.img}
            alt={project.name}
            className="projects__logo"
          />
          <article className="projects__project-text">
            <h3 className="projects__headline">{project.name}</h3>
            <p>{project.description}</p>
          </article>
        </a>
      ))}
    </section>
  );
}
