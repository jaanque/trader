import { Briefcase, Code2, LineChart, ShieldCheck } from 'lucide-react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Para todos los actores del ecosistema</h2>
          <p className="section-subtitle">
            DevStock conecta talento, oportunidades e inversión en un solo mercado líquido.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card developer">
            <div className="feature-icon-wrapper dev">
              <Code2 size={32} />
            </div>
            <h3>Para Desarrolladores</h3>
            <ul className="feature-list">
              <li>
                <LineChart size={18} className="list-icon" />
                <span><strong>Valor Tangible:</strong> Tu reputación tiene un precio de mercado real.</span>
              </li>
              <li>
                <Briefcase size={18} className="list-icon" />
                <span><strong>Visibilidad Premium:</strong> Los perfiles Top 100 reciben ofertas directas sin aplicar.</span>
              </li>
              <li>
                <ShieldCheck size={18} className="list-icon" />
                <span><strong>Tokens de Gobernanza:</strong> Influye en el futuro de la plataforma.</span>
              </li>
            </ul>
          </div>

          <div className="feature-card recruiter">
            <div className="feature-icon-wrapper rec">
              <Briefcase size={32} />
            </div>
            <h3>Para Reclutadores</h3>
            <ul className="feature-list">
              <li>
                <LineChart size={18} className="list-icon" />
                <span><strong>Datos Verificados:</strong> Historial de commits y retos validados por la comunidad.</span>
              </li>
              <li>
                <ShieldCheck size={18} className="list-icon" />
                <span><strong>Contratación Inteligente:</strong> Invierte en talento antes de contratarlo.</span>
              </li>
              <li>
                <Code2 size={18} className="list-icon" />
                <span><strong>Snippets Reales:</strong> Accede a soluciones reales, no solo CVs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
