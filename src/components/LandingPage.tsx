import { Hero } from './Hero';
import { ProblemSolution } from './ProblemSolution';
import { Mechanics } from './Mechanics';
import { Features } from './Features';
import { Testimonials } from './Testimonials';
import { CallToAction } from './CallToAction';

export const LandingPage = () => {
  return (
    <div className="landing-container">
      <Hero />
      <ProblemSolution />
      <Mechanics />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
};
