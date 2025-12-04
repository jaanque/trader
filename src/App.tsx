import Hero from './components/landingPage/Hero';
import EconomySection from './components/landingPage/EconomySection';
import MarketTicker from './components/landingPage/MarketTicker';
import FeaturesSection from './components/landingPage/FeaturesSection';
import GrowthJourney from './components/landingPage/GrowthJourney';
import CTASection from './components/landingPage/CTASection';
import Testimonials from './components/landingPage/Testimonials';
import Integrations from './components/landingPage/Integrations';
import './App.css';
import { Github, Twitter, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="app">
      <MarketTicker />
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">DevStock</div>
          <div className="nav-links">
            <a href="#">Mercado</a>
            <a href="#">Retos</a>
            <a href="#">Comunidad</a>
            <button className="nav-btn">Login</button>
          </div>
        </div>
      </nav>
      <main>
        <Hero />
        <Integrations />
        <FeaturesSection />
        <EconomySection />
        <GrowthJourney />
        <Testimonials />
        <CTASection />
      </main>
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-col">
            <h3>DevStock</h3>
            <p>El mercado donde el código define tu valor. Únete a la revolución de la reputación técnica.</p>
          </div>
          <div className="footer-col">
            <h4>Plataforma</h4>
            <a href="#">Explorar Mercado</a>
            <a href="#">Ranking Global</a>
            <a href="#">Retos de Código</a>
          </div>
          <div className="footer-col">
            <h4>Comunidad</h4>
            <a href="#">Discord</a>
            <a href="#">Blog</a>
            <a href="#">Manifiesto</a>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="#">Términos</a>
            <a href="#">Privacidad</a>
            <div className="social-links">
              <Github size={20} />
              <Twitter size={20} />
              <Linkedin size={20} />
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} DevStock Inc. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
