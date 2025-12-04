import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export const ProblemSolution = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    gsap.fromTo(el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="section problem-solution-section">
      <div className="container" ref={containerRef}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Más allá de los Likes</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>El problema de las redes tradicionales vs. Nuestra solución.</p>
        </div>

        <div className="card-grid">
          <div className="card" style={{ borderColor: 'var(--color-danger)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--color-danger)' }}>
                <AlertCircle size={32} />
                <h3>El Problema</h3>
             </div>
             <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
               Los likes no miden tu talento. En las redes sociales tradicionales, el ruido oculta el código de calidad.
               La popularidad superficial gana a la habilidad técnica real.
             </p>
          </div>

          <div className="card" style={{ borderColor: 'var(--color-accent)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                <CheckCircle2 size={32} />
                <h3>La Solución</h3>
             </div>
             <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
               En <strong>DevStock</strong>, la comunidad invierte en tu perfil con tokens.
               Tu valor en la bolsa refleja tu habilidad real, validada por otros desarrolladores, no solo tu popularidad.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};
