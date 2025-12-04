import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Coins, TrendingUp, Diamond } from 'lucide-react';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export const Mechanics = () => {
    const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        stepsRef.current.forEach((el, index) => {
            gsap.fromTo(el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                    }
                }
            );
        });
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !stepsRef.current.includes(el)) {
            stepsRef.current.push(el);
        }
    };

    return (
        <section className="section mechanics-section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Cómo Funciona la Economía</h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>Convierte tu código en activos digitales en 3 pasos.</p>
                </div>

                <div className="steps-container">
                    <div className="step-card" ref={addToRefs}>
                        <div className="step-icon">
                            <Coins size={64} strokeWidth={1.5} />
                        </div>
                        <h3>1. Gana Tokens</h3>
                        <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                            Publica soluciones, completa retos de código y ayuda a la comunidad para ganar tokens.
                        </p>
                    </div>

                    <div className="step-card" ref={addToRefs}>
                        <div className="step-icon">
                            <TrendingUp size={64} strokeWidth={1.5} />
                        </div>
                        <h3>2. Invierte</h3>
                        <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                            Usa tus tokens para comprar "acciones" de otros desarrolladores. Si ellos crecen, tú ganas.
                        </p>
                    </div>

                    <div className="step-card" ref={addToRefs}>
                        <div className="step-icon">
                            <Diamond size={64} strokeWidth={1.5} />
                        </div>
                        <h3>3. Tu Valor es Bolsa</h3>
                        <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                            Tu "Market Cap" es tu currículum. Llega al Top 100 y atrae las mejores ofertas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
