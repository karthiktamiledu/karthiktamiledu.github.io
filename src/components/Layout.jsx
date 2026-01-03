import { NavLink } from 'react-router-dom';
import logoDark from '../assets/darkLogo.jpg';

function Layout({ children }) {
  return (
    <>
      <header className="bg-dark text-white py-4">
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
    </>
  );
}

export default Layout;
