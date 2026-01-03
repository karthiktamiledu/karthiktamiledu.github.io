import { Link } from 'react-router-dom';
import logoDark from '../assets/darkLogo.jpg';
import logoLight from '../assets/lightLogo.jpg';
import Layout from '../components/Layout';

function Home() {
  return (
    <>
      <Layout>
        <main className="container text-center py-5">
          <h1>Under Construction</h1>
          <img src={logoLight} className="img-fluid mt-4" alt="logo" />
        </main>
      </Layout>
    </>
  );
}

export default Home;
