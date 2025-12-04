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
  const dotsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Animate the vertical line filling up
      // We use a timeline to sync it perfectly
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.5,
        }
      });

      tl.fromTo(lineRef.current,
        { height: "0%" },
        { height: "100%", ease: "none" }
      );

      // 2. Animate Cards (Parallax + Fade In)
      cardsRef.current.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // 3. Animate Dots activating
      dotsRef.current.forEach((dot) => {
        gsap.to(dot, {
          backgroundColor: "#2563eb", // blue-600
          borderColor: "#2563eb",
          scale: 1.5,
          boxShadow: "0 0 0 4px rgba(37, 99, 235, 0.2)",
          duration: 0.3,
          scrollTrigger: {
            trigger: dot,
            start: "top 55%", // When dot hits the middle (where line is filling)
            toggleActions: "play reverse play reverse"
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Helper to add ref
  const addCardRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const addDotRef = (el: HTMLDivElement | null) => {
    if (el && !dotsRef.current.includes(el)) {
      dotsRef.current.push(el);
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
              <div key={index} className={`journey-step ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="step-content" ref={addCardRef}>
                  <div className={`step-icon ${step.color}`}>
                    {step.icon}
                  </div>
                  <div className="step-text">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
                {/* Connector dot on the line */}
                <div className="step-dot" ref={addDotRef}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthJourney;
