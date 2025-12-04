import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export const Testimonials = () => {
    const cardRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(cardRef.current,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: 'top 85%',
                }
            }
        );
    }, []);

    return (
        <section className="section testimonials-section">
            <div className="container">
                <div ref={cardRef} className="testimonial-card">
                    <Quote size={40} style={{ color: 'var(--color-primary)', marginBottom: '1rem', opacity: 0.5 }} />
                    <p className="quote">
                        "Antes solo tenía un currículum estático. Ahora, mi Valor de Mercado de 1.500 tokens es la prueba en tiempo real de mi habilidad. ¡He recibido ofertas de empleo solo por estar en el Top 50!"
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem' }}>
                         <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(45deg, #58a6ff, #a371f7)', marginRight: '1rem' }}></div>
                         <div style={{ textAlign: 'left' }}>
                             <div style={{ fontWeight: 'bold' }}>Alex M.</div>
                             <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Desarrollador Senior</div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
