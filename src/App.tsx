import Hero from './components/Hero';
import EconomySection from './components/EconomySection';
import MarketTicker from './components/MarketTicker';
import FeaturesSection from './components/FeaturesSection';
import GrowthJourney from './components/GrowthJourney';
import CTASection from './components/CTASection';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import './App.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Twitter, Linkedin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Global fade-up animation for all sections
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

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
