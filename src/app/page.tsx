import { ProjectCard } from "@/components/ProjectCard";
import { profileLinks, regularProjects, gameProjects } from "@/config/config";

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero reveal">
        <p className="eyebrow">Welcome to the Homepage of...</p>
        <h1>Limeboy0603</h1>
        <p>
          A passionate software developer with exposure to a wide range of technologies.<br />
          Currently working as a Software Developer in Cybersecurity.
        </p>
      </section>

      <section className="profile-links reveal reveal-delay-1" aria-label="Profiles">
        <h2>Profiles</h2>
        <div className="profile-link-grid">
          {profileLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section className="reveal reveal-delay-2" aria-label="Regular Projects">
        <h2>Regular Projects</h2>
        <div className="project-grid">
          {regularProjects.map((project) => (
            <ProjectCard key={project.projectUrl} project={project} />
          ))}
        </div>
      </section>

      <section className="reveal reveal-delay-3" aria-label="Video Game Projects">
        <h2>Video Game Projects</h2>
        <div className="project-grid">
          {gameProjects.map((project) => (
            <ProjectCard key={project.projectUrl} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
