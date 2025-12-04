import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import './LandingPage.css';

export const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.fromTo(titleRef.current,
        { y: 100, opacity: 0, rotateX: 10 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.5, stagger: 0.1 }
      )
      .fromTo(subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        '-=1'
      )
      .fromTo(btnRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
        '-=0.8'
      )
      .fromTo(visualRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5 },
        '-=1'
      );

      // Floating animation for visual elements
      gsap.to(visualRef.current, {
          y: -20,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 2
      });
  }, []);

  return (
    <section className="section hero-section" ref={containerRef}>
      {/* Dynamic Background Elements */}
      <div className="bg-orb" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, var(--color-primary), transparent)', top: '-10%', left: '-10%', opacity: 0.2 }}></div>
      <div className="bg-orb" style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, var(--color-violet), transparent)', bottom: '10%', right: '-10%', opacity: 0.15 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <h1 ref={titleRef} className="hero-title">
          Tu Código es tu Capital: <br />
          <span className="text-gradient">La Bolsa de Programadores</span>
        </h1>

        <p ref={subtitleRef} className="hero-subtitle">
          DevStock es la red social donde tu habilidad técnica tiene un valor de mercado real.
          Sube tus proyectos, completa retos y haz crecer tu cotización.
        </p>

        <div ref={btnRef}>
          <button className="btn-glow">
            Únete a la Beta <ArrowRight size={20} />
          </button>
        </div>

        {/* Abstract High-Fidelity Visual */}
        <div ref={visualRef} style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center' }}>
            <div className="glass-card" style={{
                padding: '2px',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.1), transparent)',
                width: '100%',
                maxWidth: '900px'
            }}>
                <div style={{
                    background: 'var(--color-bg-secondary)',
                    borderRadius: '22px',
                    padding: '2rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Fake UI Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid #222', paddingBottom: '1rem' }}>
                         <div style={{ display: 'flex', gap: '1rem' }}>
                             <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                             <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                             <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                         </div>
                         <div style={{ color: '#555', fontSize: '0.8rem', fontFamily: 'monospace' }}>devstock_market_v1.0</div>
                    </div>

                    {/* Content */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '200px', padding: '0 2rem' }}>
                         {[...Array(15)].map((_, i) => (
                             <div key={i} style={{
                                 width: '4%',
                                 height: `${20 + Math.random() * 60}%`,
                                 background: i === 14 ? 'var(--color-accent)' : 'linear-gradient(to top, #222, #444)',
                                 borderRadius: '4px',
                                 position: 'relative'
                             }}>
                                 {i === 14 && (
                                     <div style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-accent)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold', color: '#000' }}>
                                         +124%
                                     </div>
                                 )}
                             </div>
                         ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
