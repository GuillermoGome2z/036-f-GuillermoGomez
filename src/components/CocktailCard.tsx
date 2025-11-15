import React from 'react';
import type { Cocktail } from '../services/cocktailService';
import './CocktailCard.css';

interface CocktailCardProps {
  cocktail: Cocktail;
  onClick: (id: string) => void;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail, onClick }) => {
  return (
    <div className="cocktail-card" onClick={() => onClick(cocktail.idDrink)}>
      <div className="card-image-container">
        <img 
          src={cocktail.strDrinkThumb} 
          alt={cocktail.strDrink} 
          className="cocktail-image"
          loading="lazy"
        />
        <div className="card-overlay">
          <span className="view-details">Ver Detalles</span>
        </div>
      </div>
      <div className="card-content">
        <h3 className="cocktail-name">{cocktail.strDrink}</h3>
        <p className="cocktail-id">ID: {cocktail.idDrink}</p>
      </div>
    </div>
  );
};

export default CocktailCard;
