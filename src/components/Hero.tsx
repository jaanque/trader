import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import './LandingPage.css';

export const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo(ctaRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3')
      .fromTo(visualRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.3');
  }, []);

  return (
    <section className="section hero-section">
      <div className="container">
        <h1 ref={titleRef} className="hero-title">
          Tu Código es tu Capital: <br /> La Bolsa de Programadores
        </h1>
        <h2 ref={subtitleRef} className="hero-subtitle">
          Una red social donde los tokens de la plataforma definen el valor de tu perfil. Gana, invierte y demuestra tu valía.
        </h2>
        <div ref={ctaRef}>
          <button className="btn-primary">
            Únete a la Beta <ArrowRight style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }} size={20} />
          </button>
        </div>

        <div ref={visualRef} style={{ marginTop: '4rem', position: 'relative' }}>
            {/* Placeholder for visual: Graph rising */}
            <div style={{
                background: 'rgba(22, 27, 34, 0.8)',
                borderRadius: '16px',
                padding: '2rem',
                border: '1px solid var(--color-card-border)',
                maxWidth: '800px',
                margin: '0 auto',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ccc', marginRight: '1rem' }}></div>
                    <div>
                        <div style={{ fontWeight: 'bold' }}>Alex Dev</div>
                        <div style={{ fontSize: '0.8rem', color: '#8b949e' }}>@alexcode</div>
                    </div>
                    <div style={{ marginLeft: 'auto', color: '#238636', fontWeight: 'bold' }}>+24.5% 📈</div>
                </div>
                {/* Simulated Chart Line */}
                <div style={{ height: '150px', display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
                     {[30, 45, 40, 60, 55, 75, 80, 70, 90, 100].map((h, i) => (
                         <div key={i} style={{
                             flex: 1,
                             background: 'linear-gradient(to top, var(--color-accent-glow), var(--color-accent))',
                             height: `${h}%`,
                             borderRadius: '4px 4px 0 0',
                             opacity: 0.8
                         }}></div>
                     ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
