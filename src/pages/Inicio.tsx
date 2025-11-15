import React from 'react';
import './Inicio.css';

interface InicioProps {
  onNavigate: (section: string) => void;
}

const Inicio: React.FC<InicioProps> = ({ onNavigate }) => {
  return (
    <section id="inicio" className="section-inicio">
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="umg-logo-container">
            <img 
              src="/images/logo umg.png" 
              alt="Logo UMG" 
              className="umg-logo-large" 
            />
          </div>
          <h1 className="hero-title">Bienvenido a Cocktail App</h1>
          <div className="student-card">
            <div className="card-header">
              <h2 className="student-name">Guillermo Jose Gomez Aguilera</h2>
            </div>
            <div className="card-body">
              <div className="info-item">
                <span className="info-label">Carnet:</span>
                <span className="info-value">1790-22-16429</span>
              </div>
              <div className="info-item">
                <span className="info-label">Universidad:</span>
                <span className="info-value">Universidad Mariano Gálvez de Guatemala</span>
              </div>
              <div className="info-item">
                <span className="info-label">Proyecto:</span>
                <span className="info-value">Consumo de API REST - TheCocktailDB</span>
              </div>
            </div>
          </div>
          <p className="hero-subtitle">Descubre el fascinante mundo de los cócteles premium</p>
          <button 
            className="btn-cta" 
            onClick={() => onNavigate('consumo')}
          >
            <span>Explorar Cócteles</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
