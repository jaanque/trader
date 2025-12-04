import { Coins, TrendingUp, Gem, Code, Heart, Trophy, UserPlus } from 'lucide-react';
import './EconomySection.css';

const EconomySection = () => {
  return (
    <section className="economy-section">
      <div className="container">
        <h2 className="section-title">
          ⚙️ Cómo Funciona la Economía
        </h2>

        <div className="economy-grid">
          {/* A. Gana Tokens */}
          <div className="economy-card">
            <div className="icon-wrapper icon-yellow">
              <Coins size={32} />
            </div>
            <h3 className="card-title">A. Gana Tokens 🪙</h3>
            <div className="card-content">
              <div className="content-item">
                <h4 className="item-title">
                  <Code size={16} /> Creando valor
                </h4>
                <p>Publica soluciones geniales, ayuda en la comunidad, comparte código de impacto.</p>
              </div>
              <div className="content-item">
                <h4 className="item-title">
                  <Trophy size={16} /> Superando retos
                </h4>
                <p>Acepta y completa desafíos de programación para obtener las mayores recompensas.</p>
              </div>
              <div className="content-item">
                <h4 className="item-title">
                  <Heart size={16} /> Participando
                </h4>
                <p>Interactúa con contenido de valor.</p>
              </div>
            </div>
          </div>

          {/* B. Invierte en Perfiles */}
          <div className="economy-card">
            <div className="icon-wrapper icon-blue">
              <TrendingUp size={32} />
            </div>
            <h3 className="card-title">B. Invierte en Perfiles 📈</h3>
            <div className="card-content">
              <div className="content-item">
                <h4 className="item-title">
                  <UserPlus size={16} /> Compra Acciones
                </h4>
                <p>Usa tus tokens para "comprar acciones" de perfiles que admiras o de jóvenes promesas.</p>
              </div>
              <div className="content-item">
                <p>Tu inversión impulsa el valor de ese programador en la bolsa interna.</p>
              </div>
              <div className="highlight-box success">
                Si el perfil que apoyas crece, ¡tu propia inversión puede valorizarse!
              </div>
            </div>
          </div>

          {/* C. El Perfil es la Bolsa */}
          <div className="economy-card">
            <div className="icon-wrapper icon-purple">
              <Gem size={32} />
            </div>
            <h3 className="card-title">C. El Perfil es la Bolsa 💎</h3>
            <div className="card-content">
              <p>
                Tu <strong>Valor de Mercado</strong> es un índice dinámico basado en tu actividad,
                el éxito de tus retos y la confianza de la comunidad (inversión).
              </p>
              <div className="highlight-box dark">
                <p className="highlight-title">EL OBJETIVO</p>
                <p>Llega al Top 100 de la bolsa y haz que tu perfil se convierta en una referencia codiciada por reclutadores.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EconomySection;
