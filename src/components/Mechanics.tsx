import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Coins, TrendingUp, Trophy } from 'lucide-react';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export const Mechanics = () => {
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.fromTo(stepsRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".mechanics-grid",
                    start: 'top 80%',
                }
            }
        );
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !stepsRef.current.includes(el)) {
            stepsRef.current.push(el);
        }
    };

    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Ecosistema</span>
                    <h2 className="section-title">Economía de Talento</h2>
                </div>

                <div className="grid-3 mechanics-grid">
                    <div className="glass-card" ref={addToRefs} style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ margin: '0 auto 2rem', width: '80px', height: '80px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-primary)' }}>
                            <Coins size={36} />
                        </div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>1. Gana Tokens</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Resuelve retos, contribuye a open source y ayuda a otros. Cada aporte validado llena tu cartera.
                        </p>
                    </div>

                    <div className="glass-card" ref={addToRefs} style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ margin: '0 auto 2rem', width: '80px', height: '80px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-violet)' }}>
                            <TrendingUp size={36} />
                        </div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>2. Invierte</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Detecta talento temprano. Compra "acciones" de perfiles prometedores. Si ellos crecen, tu inversión se multiplica.
                        </p>
                    </div>

                    <div className="glass-card" ref={addToRefs} style={{ padding: '2.5rem', textAlign: 'center' }}>
                        <div style={{ margin: '0 auto 2rem', width: '80px', height: '80px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                            <Trophy size={36} />
                        </div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>3. Cotiza Alto</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Tu "Market Cap" es tu nuevo CV. Llega al Top 100 y conviértete en una referencia codiciada por la industria.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
