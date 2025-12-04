import Hero from './components/Hero';
import EconomySection from './components/EconomySection';
import MarketTicker from './components/MarketTicker';
import FeaturesSection from './components/FeaturesSection';
import GrowthJourney from './components/GrowthJourney';
import CTASection from './components/CTASection';
import './App.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
        <FeaturesSection />
        <EconomySection />
        <GrowthJourney />
        <CTASection />
      </main>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DevStock. El mercado de talento tech.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
