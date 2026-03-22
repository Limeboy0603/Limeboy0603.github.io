import { Project } from "@/types/Project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <h2>
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-title">
          {project.title}
        </a>
      </h2>
      <p className="project-description" style={{ whiteSpace: "pre-wrap" }}>
        {project.description}
      </p>
      {project.stack && project.stack.length > 0 ? (
        <p className="project-stack">
        {/* {project.stack.join(" | ")} */}
        {project.stack.map((tech, index) => (
          <span key={index} className="stack">
            {tech}
          </span>
        ))}
      </p>
      ) : null}
      
      {project.extraLinks && project.extraLinks.length > 0 ? (
        <div className="project-links">
          {project.extraLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}