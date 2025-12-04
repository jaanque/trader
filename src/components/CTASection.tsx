import './CTASection.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <h2>¿Listo para cotizar en bolsa?</h2>
          <p>
            Únete a los primeros 10,000 desarrolladores que ya están construyendo su valor de mercado.
            La IPO de tu carrera empieza hoy.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary large">Crear Perfil Gratis</button>
            <button className="btn btn-secondary large">Explorar Top 100</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
