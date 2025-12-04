import './Hero.css';

import { TrendingUp, User } from 'lucide-react';

const Hero = () => {
  return (
    <header className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Invierte en Talento. <br />
            <span className="hero-highlight">Conviértete en Leyenda.</span>
          </h1>
          <p className="hero-subtitle">
            La primera red social donde tu código define tu valor de mercado.
            DevStock es el lugar donde los desarrolladores cotizan en bolsa.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">Empezar Ahora</button>
            <button className="btn btn-secondary">Explorar Mercado</button>
          </div>
        </div>

        {/* Visual Mockup */}
        <div className="hero-visual">
          <div className="float-card">
            <div className="float-header">
              <div className="float-avatar"><User size={20}/></div>
              <div className="float-info">
                <span className="name">Alex Dev</span>
                <span className="handle">@alex_code</span>
              </div>
              <div className="float-badge">+24%</div>
            </div>
            <div className="float-chart">
              {/* Simple CSS Chart Line */}
              <svg viewBox="0 0 100 30" width="100%" height="40" fill="none" stroke="#2563eb" strokeWidth="2">
                <path d="M0 25 C20 25, 30 10, 50 15 C70 20, 80 5, 100 2" />
              </svg>
            </div>
            <div className="float-footer">
              <span className="label">Market Cap</span>
              <span className="value flex-center"><TrendingUp size={14}/> $142,500</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
