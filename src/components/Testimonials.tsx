import { Quote } from 'lucide-react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: "Elena R.",
    role: "Full Stack Developer",
    text: "Mi valoración subió un 40% tras completar el reto de Algoritmos. Ahora recibo ofertas de empresas que ni sabía que existían.",
    company: "Top 10% Talent"
  },
  {
    name: "Marcus Chen",
    role: "Angel Investor",
    text: "DevStock me permite identificar talento crudo antes que nadie. He invertido en 5 perfiles junior que ahora son seniors en Big Tech.",
    company: "Tech Ventures"
  },
  {
    name: "Sarah Jenkins",
    role: "CTO",
    text: "Ya no miro CVs. Miro el market cap de un candidato. Es la métrica más honesta de su impacto real en la comunidad.",
    company: "FinGrid"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Confianza del Mercado</h2>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((item, index) => (
            <div key={index} className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{item.name[0]}</div>
                <div>
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-role">{item.role} • {item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
