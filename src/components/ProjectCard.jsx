function ProjectCard({ project }) {
  const { title, period, context, description, tech, links } = project;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-1">
          <h5 className="card-title mb-0">{title}</h5>
          {period && <span className="text-muted small ms-2 flex-shrink-0">{period}</span>}
        </div>

        {context && <p className="text-muted small mb-2">{context}</p>}

        <p className="card-text flex-grow-1">{description}</p>

        {tech?.length > 0 && (
          <div className="mb-2 d-flex flex-wrap gap-1">
            {tech.map((t) => (
              <span key={t} className="badge text-bg-secondary">{t}</span>
            ))}
          </div>
        )}

        {links?.length > 0 && (
          <div className="d-flex gap-3">
            {links.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
