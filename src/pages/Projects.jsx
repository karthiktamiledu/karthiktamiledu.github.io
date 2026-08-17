import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { academicProjects, personalProjects } from '../data/projects';

function Projects() {
  return (
    <Layout>
      <main className="container py-5 flex-grow-1">
        <h1 className="mb-4">Projects</h1>

        <section className="mb-5">
          <h2 className="h4 mb-3">Academic Projects</h2>
          <div className="row g-4">
            {academicProjects.map((project) => (
              <div className="col-12 col-md-6" key={project.title}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {personalProjects.length > 0 && (
          <section>
            <h2 className="h4 mb-3">Personal Projects</h2>
            <div className="row g-4">
              {personalProjects.map((project) => (
                <div className="col-12 col-md-6" key={project.title}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Projects;
