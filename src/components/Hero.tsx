import './Hero.css';

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
      </div>
    </header>
  );
};

export default Hero;
