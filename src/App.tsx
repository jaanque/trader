import Hero from './components/Hero';
import EconomySection from './components/EconomySection';
import MarketTicker from './components/MarketTicker';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import './App.css';

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
        <FeaturesSection />
        <EconomySection />
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
