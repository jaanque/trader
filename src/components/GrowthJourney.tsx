import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GitCommit, TrendingUp, Award, Zap } from 'lucide-react';
import './GrowthJourney.css';

gsap.registerPlugin(ScrollTrigger);

const MILESTONES = [
  {
    icon: <GitCommit size={24} />,
    title: "Primer Commit",
    desc: "Creas tu perfil y conectas tus repositorios. El mercado te descubre.",
    color: "bg-gray-100 text-gray-600"
  },
  {
    icon: <Zap size={24} />,
    title: "Primeros Inversores",
    desc: "Tu código genera interés. Otros devs compran acciones de tu talento.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <Award size={24} />,
    title: "Top Performer",
    desc: "Ganas retos y subes en el ranking. Tu valoración se dispara.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <TrendingUp size={24} />,
    title: "IPO Personal",
    desc: "Te conviertes en una referencia. Las empresas compiten por ti.",
    color: "bg-green-100 text-green-600"
  }
];

const GrowthJourney = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line filling up
      gsap.fromTo(lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 0.5,
          }
        }
      );

      // Animate cards popping in
      cardsRef.current.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Helper to add ref
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="growth-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Tu Evolución en el Mercado</h2>
        <p className="section-subtitle">De Junior a Blue Chip. Visualiza tu ascenso.</p>

        <div className="journey-container">
          {/* Central Line Background */}
          <div className="journey-line-bg"></div>
          {/* Central Line Fill */}
          <div className="journey-line-fill" ref={lineRef}></div>

          <div className="journey-steps">
            {MILESTONES.map((step, index) => (
              <div key={index} className={`journey-step ${index % 2 === 0 ? 'left' : 'right'}`} ref={addToRefs}>
                <div className="step-content">
                  <div className={`step-icon ${step.color}`}>
                    {step.icon}
                  </div>
                  <div className="step-text">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
                {/* Connector dot on the line */}
                <div className="step-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthJourney;
