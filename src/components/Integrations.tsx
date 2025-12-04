import { Github, Gitlab, Terminal, Code } from 'lucide-react';
import './Integrations.css';

const Integrations = () => {
  return (
    <section className="integrations-section">
      <div className="container">
        <p className="integrations-label">Se integra con tu flujo de trabajo</p>
        <div className="integrations-logos">
          <div className="logo-item"><Github size={24} /> <span>GitHub</span></div>
          <div className="logo-item"><Gitlab size={24} /> <span>GitLab</span></div>
          <div className="logo-item"><Terminal size={24} /> <span>Terminal</span></div>
          <div className="logo-item"><Code size={24} /> <span>VS Code</span></div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
