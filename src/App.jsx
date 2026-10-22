import Nav from './components/Nav.jsx';
import Overview from './components/Overview.jsx';
import Experience from './components/Experience.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Overview />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
