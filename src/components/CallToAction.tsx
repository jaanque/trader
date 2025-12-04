import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export const CallToAction = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                }
            }
        );
    }, []);

    return (
        <footer className="cta-footer">
            <div className="container" ref={containerRef}>
                <h2 style={{ fontSize: '4rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                    Cotiza tu Talento.
                </h2>
                <p style={{ fontSize: '1.25rem', marginBottom: '4rem', color: 'var(--color-text-muted)' }}>
                    Regístrate hoy y recibe 500 Tokens de Bienvenida.
                </p>

                <div className="cta-input-group">
                    <input type="email" placeholder="tu@email.com" className="input-email" />
                    <button className="btn-input">
                        Unirse <ArrowRight size={16} style={{ display: 'inline', marginLeft: '4px' }}/>
                    </button>
                </div>

                <div style={{ marginTop: '8rem', color: '#444', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #222', paddingTop: '2rem' }}>
                    <div>© 2024 DevStock Inc.</div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <span>Twitter</span>
                        <span>Github</span>
                        <span>Discord</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
