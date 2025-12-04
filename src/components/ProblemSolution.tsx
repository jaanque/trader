import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, X } from 'lucide-react';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export const ProblemSolution = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
        }
      }
    );
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
        cardsRef.current.push(el);
    }
  };

  return (
    <section className="section" ref={containerRef}>
      <div className="container">
        <div className="section-header">
           <span className="section-tag">Perspectiva</span>
           <h2 className="section-title">El Valor Real del Código</h2>
        </div>

        <div className="grid-2">
          {/* Problem Card */}
          <div ref={addToRefs} className="glass-card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, #f85149 0%, transparent 70%)', opacity: 0.2 }}></div>

             <div style={{ marginBottom: '2rem', width: '60px', height: '60px', background: 'rgba(248, 81, 73, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f85149' }}>
                <X size={32} />
             </div>

             <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>El Problema</h3>
             <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
               En las redes tradicionales, el ruido oculta la calidad. Los likes premian la popularidad superficial, no la arquitectura robusta o los algoritmos eficientes. Tu talento se pierde en el feed.
             </p>
          </div>

          {/* Solution Card */}
          <div ref={addToRefs} className="glass-card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
             <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)', opacity: 0.2 }}></div>

             <div style={{ marginBottom: '2rem', width: '60px', height: '60px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                <CheckCircle2 size={32} />
             </div>

             <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>La Solución</h3>
             <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
               <span style={{ color: '#fff', fontWeight: 600 }}>DevStock</span> transforma tu código en activos. La comunidad invierte tokens en tu perfil basándose en la calidad de tus aportes. Tu valor de mercado es la métrica definitiva de tu skill.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};
