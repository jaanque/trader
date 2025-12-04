import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, BarChart3, Users } from 'lucide-react';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export const Features = () => {
    const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        rowsRef.current.forEach((el) => {
            gsap.fromTo(el,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
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
        <section className="section features-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Herramientas para el Desarrollador Moderno</h2>
                </div>

                <div className="feature-row" ref={addToRefs}>
                    <div className="feature-content">
                        <div style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                             <Code2 size={40} />
                        </div>
                        <h3>Retos Exclusivos</h3>
                        <p style={{ margin: '1rem 0', color: 'var(--color-text-muted)' }}>
                            Desafíos de código diarios y semanales. Desde algoritmos básicos en Python hasta arquitecturas complejas en Rust. Superarlos aumenta instantáneamente tu valor.
                        </p>
                    </div>
                    <div className="feature-visual">
                        <div style={{ fontFamily: 'monospace', padding: '1rem', color: '#e0e0e0', fontSize: '0.9rem' }}>
                            <div style={{ color: '#8b949e' }}>// Daily Challenge</div>
                            <div><span style={{ color: '#f85149' }}>def</span> <span style={{ color: '#d2a8ff' }}>solve_puzzle</span>(input):</div>
                            <div style={{ paddingLeft: '1rem' }}>
                                <span style={{ color: '#f85149' }}>if</span> input.is_valid():
                            </div>
                            <div style={{ paddingLeft: '2rem' }}>
                                <span style={{ color: '#f85149' }}>return</span> <span style={{ color: '#79c0ff' }}>True</span>
                            </div>
                             <div style={{ marginTop: '1rem', color: '#238636' }}>+ 50 Tokens Reward</div>
                        </div>
                    </div>
                </div>

                <div className="feature-row reverse" ref={addToRefs}>
                    <div className="feature-content">
                        <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>
                             <BarChart3 size={40} />
                        </div>
                        <h3>Portafolio Dinámico</h3>
                        <p style={{ margin: '1rem 0', color: 'var(--color-text-muted)' }}>
                            Olvídate del PDF estático. Tu perfil muestra un gráfico en tiempo real de tu evolución, tus proyectos y el stack tecnológico que dominas.
                        </p>
                    </div>
                    <div className="feature-visual">
                        {/* Simple graph viz */}
                        <div style={{ position: 'relative', width: '80%', height: '60%' }}>
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: '#30363d' }}></div>
                            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '1px', background: '#30363d' }}></div>
                            <svg viewBox="0 0 100 50" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                                <path d="M0,50 Q20,40 40,30 T100,10" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
                                <circle cx="40" cy="30" r="3" fill="var(--color-accent)" />
                                <circle cx="100" cy="10" r="3" fill="var(--color-accent)" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="feature-row" ref={addToRefs}>
                    <div className="feature-content">
                        <div style={{ color: '#a371f7', marginBottom: '1rem' }}>
                             <Users size={40} />
                        </div>
                        <h3>Feed Personalizado</h3>
                        <p style={{ margin: '1rem 0', color: 'var(--color-text-muted)' }}>
                            Solo ves contenido relevante a tu stack. Nada de ruido. Si programas en Go, verás discusiones y retos de Go.
                        </p>
                    </div>
                    <div className="feature-visual">
                         <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '70%' }}>
                             <div style={{ height: '10px', width: '100%', background: '#30363d', borderRadius: '5px' }}></div>
                             <div style={{ height: '10px', width: '80%', background: '#30363d', borderRadius: '5px' }}></div>
                             <div style={{ height: '60px', width: '100%', background: '#21262d', borderRadius: '8px', marginTop: '10px' }}></div>
                         </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
