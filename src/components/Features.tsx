import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, BarChart3, Radio } from 'lucide-react';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export const Features = () => {
    const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        rowsRef.current.forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                    }
                }
            );
        });
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !rowsRef.current.includes(el)) {
            rowsRef.current.push(el);
        }
    };

    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Plataforma</span>
                    <h2 className="section-title">Herramientas de Élite</h2>
                </div>

                {/* Feature 1 */}
                <div className="feature-row" ref={addToRefs}>
                    <div className="feature-content">
                        <div style={{ display: 'inline-flex', padding: '12px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                             <Code2 size={28} />
                        </div>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Retos Exclusivos</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                            Accede a desafíos diseñados por expertos de la industria. Desde optimización de algoritmos hasta arquitectura de sistemas distribuidos.
                        </p>
                    </div>
                    <div className="feature-visual">
                        {/* Artistic Code Block */}
                        <div style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.8', color: '#888', width: '80%' }}>
                             <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
                                 <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#333' }}></span>
                                 <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#333' }}></span>
                             </div>
                             <div><span style={{ color: '#c678dd' }}>class</span> <span style={{ color: '#e5c07b' }}>SmartContract</span> <span style={{ color: '#e06c75' }}>extends</span> <span style={{ color: '#e5c07b' }}>Asset</span> {'{'}</div>
                             <div style={{ paddingLeft: '20px' }}>
                                 <span style={{ color: '#c678dd' }}>async</span> <span style={{ color: '#61afef' }}>validate</span>(token) {'{'}
                             </div>
                             <div style={{ paddingLeft: '40px' }}>
                                 <span style={{ color: '#c678dd' }}>if</span> (!token.isValid) <span style={{ color: '#c678dd' }}>throw</span> <span style={{ color: '#98c379' }}>Error</span>();
                             </div>
                             <div style={{ paddingLeft: '40px' }}>
                                 <span style={{ color: '#c678dd' }}>return</span> <span style={{ color: '#d19a66' }}>true</span>;
                             </div>
                             <div style={{ paddingLeft: '20px' }}>{'}'}</div>
                             <div>{'}'}</div>

                             <div className="glass-card" style={{ marginTop: '20px', padding: '10px', display: 'inline-block', fontSize: '12px', color: '#fff', border: '1px solid #333' }}>
                                 Status: <span style={{ color: '#98c379' }}>Passed</span>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="feature-row reverse" ref={addToRefs}>
                    <div className="feature-content">
                        <div style={{ display: 'inline-flex', padding: '12px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
                             <BarChart3 size={28} />
                        </div>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Portafolio Dinámico</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                            Olvídate del PDF estático. Tu perfil muestra un gráfico en tiempo real de tu evolución y el stack tecnológico que dominas.
                        </p>
                    </div>
                    <div className="feature-visual">
                         <div style={{ position: 'relative', width: '70%', height: '50%' }}>
                            {/* Abstract Chart */}
                            <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                                <defs>
                                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0,80 C40,70 60,90 100,50 S160,40 200,10" fill="none" stroke="var(--color-accent)" strokeWidth="3" />
                                <path d="M0,80 C40,70 60,90 100,50 S160,40 200,10 V100 H0 Z" fill="url(#chartGradient)" stroke="none" />

                                <circle cx="100" cy="50" r="6" fill="#000" stroke="var(--color-accent)" strokeWidth="2" />
                                <rect x="80" y="10" width="40" height="25" rx="5" fill="#222" opacity="0.9" />
                                <text x="100" y="27" textAnchor="middle" fill="#fff" fontSize="10" fontFamily="sans-serif">High</text>
                            </svg>
                         </div>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="feature-row" ref={addToRefs}>
                    <div className="feature-content">
                        <div style={{ display: 'inline-flex', padding: '12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--color-violet)', marginBottom: '1.5rem' }}>
                             <Radio size={28} />
                        </div>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Feed Sin Ruido</h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                            Algoritmos que entienden código. Solo ves contenido relevante a tu stack. Si programas en Rust, verás Rust.
                        </p>
                    </div>
                    <div className="feature-visual">
                         <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                             <div className="glass-card" style={{ height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 15px', gap: '10px' }}>
                                 <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#444' }}></div>
                                 <div style={{ height: '8px', width: '60%', background: '#333', borderRadius: '4px' }}></div>
                             </div>
                             <div className="glass-card" style={{ height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 15px', gap: '10px', opacity: 0.6, transform: 'scale(0.95)' }}>
                                 <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#444' }}></div>
                                 <div style={{ height: '8px', width: '50%', background: '#333', borderRadius: '4px' }}></div>
                             </div>
                             <div className="glass-card" style={{ height: '60px', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 15px', gap: '10px', opacity: 0.3, transform: 'scale(0.9)' }}>
                                 <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#444' }}></div>
                                 <div style={{ height: '8px', width: '40%', background: '#333', borderRadius: '4px' }}></div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
