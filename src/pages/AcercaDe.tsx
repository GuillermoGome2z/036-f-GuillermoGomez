import React from 'react';
import './AcercaDe.css';

const AcercaDe: React.FC = () => {
  return (
    <section id="acerca" className="section-acerca">
      <div className="container">
        <h2 className="section-title">Acerca del Proyecto</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">📱</div>
            <h3>Descripción</h3>
            <p>
              Aplicación web moderna que consume la API de TheCocktailDB para presentar 
              una colección completa de cócteles con información detallada, imágenes de 
              alta calidad y recetas paso a paso.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">💻</div>
            <h3>Tecnologías Utilizadas</h3>
            <ul className="tech-list">
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Vite</li>
              <li>CSS3 Avanzado</li>
              <li>Fetch API</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="about-card">
            <div className="card-icon">✨</div>
            <h3>Características Premium</h3>
            <ul className="tech-list">
              <li>Diseño moderno con gradientes</li>
              <li>Sistema de paginación inteligente</li>
              <li>Modal interactivo de detalles</li>
              <li>Tarjetas animadas</li>
              <li>Interfaz 100% responsive</li>
              <li>Transiciones suaves</li>
            </ul>
          </div>

          <div className="about-card">
            <div className="card-icon">🎯</div>
            <h3>Funcionalidades</h3>
            <ul className="tech-list">
              <li>Visualización de 15+ cócteles</li>
              <li>Imágenes en miniatura</li>
              <li>Información detallada</li>
              <li>Ingredientes y medidas</li>
              <li>Instrucciones de preparación</li>
              <li>Navegación fluida</li>
            </ul>
          </div>

          <div className="about-card full-width">
            <div className="card-icon">👨‍🎓</div>
            <h3>Información del Estudiante</h3>
            <div className="student-details">
              <div className="detail-row">
                <span className="detail-label">Nombre:</span>
                <span className="detail-value">Guillermo Jose Gomez Aguilera</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Carnet:</span>
                <span className="detail-value">1790-22-16429</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Universidad:</span>
                <span className="detail-value">Universidad Mariano Gálvez de Guatemala</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Curso:</span>
                <span className="detail-value">Desarrollo Web</span>
              </div>
            </div>
          </div>

          <div className="about-card full-width api-card">
            <div className="card-icon">🌐</div>
            <h3>API Utilizada</h3>
            <p>
              <strong>TheCocktailDB</strong> - API REST gratuita para obtener información 
              sobre cócteles, ingredientes y recetas.
            </p>
            <div className="api-details">
              <div className="api-endpoint">
                <span className="endpoint-label">Endpoint:</span>
                <code>https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail</code>
              </div>
              <div className="api-endpoint">
                <span className="endpoint-label">Detalles:</span>
                <code>https://thecocktaildb.com/api/json/v1/1/lookup.php?i=&#123;id&#125;</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
