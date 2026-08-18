import Layout from '../components/Layout';
import { profile } from '../data/site';

function About() {
  return (
    <Layout>
      <main className="container py-5 flex-grow-1" style={{ maxWidth: '40rem' }}>
        <h1 className="mb-4">About Me</h1>

        {profile.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        <h2 className="h5 mt-4 mb-2">Skills</h2>
        <div className="d-flex flex-wrap gap-2 mb-4">
          {profile.skills.map((skill) => (
            <span key={skill} className="badge text-bg-secondary">{skill}</span>
          ))}
        </div>

        <h2 className="h5 mb-2">Experience</h2>
        <ul className="list-unstyled">
          {profile.experience.map((entry) => (
            <li key={entry.company + entry.role} className="mb-2">
              <strong>{entry.role}</strong> — {entry.company}
              <div className="text-muted small">{entry.period}</div>
            </li>
          ))}
        </ul>

        <h2 className="h5 mb-2">Education</h2>
        <ul className="list-unstyled">
          {profile.education.map((entry) => (
            <li key={entry.school} className="mb-2">
              <strong>{entry.school}</strong> — {entry.degree}
              <div className="text-muted small">{entry.period}</div>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
}

export default About;
