import { NavLink } from 'react-router-dom';
import logoDark from '../assets/darkLogo.jpg';
import { profile } from '../data/site';

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="bg-dark text-white py-4 sticky-top shadow-sm">
        <div className="container d-flex align-items-center gap-4">
          <img src={logoDark} height="28" alt="logo" />

          <nav className="d-flex gap-3">
            <NavLink to="/" end className={({ isActive }) =>
                `text-white text-decoration-none nav-link ${
                    isActive ? 'active' : ''
                }`
            }>Home</NavLink>

            <NavLink to="/projects" className={({ isActive }) =>
                `text-white text-decoration-none nav-link ${
                  isActive ? 'active' : ''
                }`
            }>Projects</NavLink>

            <NavLink to="/about" className={({ isActive }) =>
                `text-white text-decoration-none nav-link ${
                  isActive ? 'active' : ''
                }`
            }>About</NavLink>
          </nav>
        </div>
      </header>

      {children}

      <footer className="bg-dark text-white py-3 mt-auto">
        <div className="container d-flex justify-content-center gap-3 small">
          <a className="text-white-50" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-white-50" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-white-50" href={profile.links.email}>Email</a>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
