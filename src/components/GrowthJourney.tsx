import { GitCommit, TrendingUp, Award, Zap } from 'lucide-react';
import './GrowthJourney.css';

const MILESTONES = [
  {
    icon: <GitCommit size={24} />,
    title: "Primer Commit",
    desc: "Creas tu perfil y conectas tus repositorios. El mercado te descubre.",
    color: "bg-gray-100 text-gray-600"
  },
  {
    icon: <Zap size={24} />,
    title: "Primeros Inversores",
    desc: "Tu código genera interés. Otros devs compran acciones de tu talento.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <Award size={24} />,
    title: "Top Performer",
    desc: "Ganas retos y subes en el ranking. Tu valoración se dispara.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <TrendingUp size={24} />,
    title: "IPO Personal",
    desc: "Te conviertes en una referencia. Las empresas compiten por ti.",
    color: "bg-green-100 text-green-600"
  }
];

const GrowthJourney = () => {
  return (
    <section className="growth-section">
      <div className="container">
        <h2 className="section-title">Tu Evolución en el Mercado</h2>
        <p className="section-subtitle">De Junior a Blue Chip. Visualiza tu ascenso.</p>

        <div className="journey-container">
          {/* Central Line Background */}
          <div className="journey-line-bg"></div>

          <div className="journey-steps">
            {MILESTONES.map((step, index) => (
              <div key={index} className={`journey-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="step-content">
                  <div className={`step-icon ${step.color}`}>
                    {step.icon}
                  </div>
                  <div className="step-text">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
                {/* Connector dot on the line */}
                <div className="step-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthJourney;
