import React from 'react';
import type { CocktailDetail } from '../services/cocktailService';
import './CocktailModal.css';

interface CocktailModalProps {
  cocktail: CocktailDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const CocktailModal: React.FC<CocktailModalProps> = ({ cocktail, isOpen, onClose }) => {
  if (!isOpen || !cocktail) return null;

  const getIngredients = () => {
    const ingredients: { ingredient: string; measure: string }[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}` as keyof CocktailDetail];
      const measure = cocktail[`strMeasure${i}` as keyof CocktailDetail];
      if (ingredient) {
        ingredients.push({
          ingredient: ingredient as string,
          measure: (measure as string) || ''
        });
      }
    }
    return ingredients;
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="modal-header">
          <h2>{cocktail.strDrink}</h2>
          <div className="modal-badges">
            <span className="badge category">{cocktail.strCategory}</span>
            <span className="badge alcoholic">{cocktail.strAlcoholic}</span>
          </div>
        </div>

        <div className="modal-image-container">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="modal-image" />
        </div>

        <div className="modal-body">
          <div className="info-section">
            <div className="info-item">
              <span className="info-icon">🍸</span>
              <div>
                <h4>Tipo de Vaso</h4>
                <p>{cocktail.strGlass}</p>
              </div>
            </div>
          </div>

          <div className="ingredients-section">
            <h3>
              <span className="section-icon">🥄</span>
              Ingredientes
            </h3>
            <ul className="ingredients-list">
              {getIngredients().map((item, index) => (
                <li key={index}>
                  <span className="ingredient-bullet">•</span>
                  <span className="ingredient-measure">{item.measure}</span>
                  <span className="ingredient-name">{item.ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="instructions-section">
            <h3>
              <span className="section-icon">📝</span>
              Instrucciones de Preparación
            </h3>
            <p className="instructions-text">{cocktail.strInstructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailModal;
