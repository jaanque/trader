import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
import './LandingPage.css';

gsap.registerPlugin(ScrollTrigger);

export const Testimonials = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { opacity: 0, scale: 0.95 },
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <section className="section" style={{ padding: '10rem 2rem' }}>
            <div className="container" ref={containerRef}>
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <Quote size={60} style={{ color: 'var(--color-primary)', marginBottom: '2rem', opacity: 0.3 }} />
                    <h2 style={{ fontSize: '2.5rem', lineHeight: '1.4', fontWeight: '500', marginBottom: '3rem' }}>
                        "Antes solo tenía un currículum estático. Ahora, mi Valor de Mercado de 1.500 tokens es la prueba irrefutable de mi habilidad. He recibido ofertas de Silicon Valley solo por estar en el Top 50."
                    </h2>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                         <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #eee, #999)', padding: '2px' }}>
                             <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#333' }}></div>
                         </div>
                         <div style={{ textAlign: 'left' }}>
                             <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Alex Morgan</div>
                             <div style={{ color: 'var(--color-primary)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>SENIOR DEVELOPER</div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
