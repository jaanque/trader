import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export const CallToAction = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 90%',
                }
            }
        );
    }, []);

    return (
        <footer className="cta-footer">
            <div className="container" ref={containerRef}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>No solo muestres tu código, cotízalo.</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--color-text-muted)' }}>
                    Regístrate hoy y recibe 500 Tokens de Bienvenida.
                </p>

                <div className="footer-form">
                    <input type="email" placeholder="tu@email.com" className="input-email" />
                    <button className="btn-primary">
                        Quiero ser parte de la Beta
                    </button>
                </div>

                <div style={{ marginTop: '4rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} DevStock. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};
