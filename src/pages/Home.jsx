import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { profile } from '../data/site';
import { academicProjects, personalProjects } from '../data/projects';

const featured = [...academicProjects, ...personalProjects].filter((p) => p.featured);

function Home() {
  return (
    <Layout>
      <main className="container py-5 flex-grow-1">
        <section className="text-center py-4">
          <h1 className="mb-2">{profile.name}</h1>
          <p className="fs-5 text-muted mb-3">{profile.title}</p>
          <p className="mx-auto" style={{ maxWidth: '40rem' }}>{profile.pitch}</p>

          <div className="d-flex justify-content-center gap-3 mt-3">
            {profile.links.cv && (
              <a href={profile.links.cv} target="_blank" rel="noreferrer">CV</a>
            )}
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={profile.links.email}>Email</a>
          </div>
        </section>

        {featured.length > 0 && (
          <section className="mt-5">
            <h2 className="h4 mb-3 text-center">Featured Projects</h2>
            <div className="row g-4">
              {featured.map((project) => (
                <div className="col-12 col-md-6" key={project.title}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            <div className="text-center mt-3">
              <Link to="/projects">See all projects &rarr;</Link>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
