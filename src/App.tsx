import Hero from './components/Hero';
import EconomySection from './components/EconomySection';
import './App.css';

function App() {
  return (
    <div className="app">
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
        <EconomySection />
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
