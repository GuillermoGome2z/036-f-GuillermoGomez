import React, { useState, useEffect } from 'react';
import { cocktailService } from '../services/cocktailService';
import type { Cocktail, CocktailDetail } from '../services/cocktailService';
import CocktailCard from '../components/CocktailCard';
import Pagination from '../components/Pagination';
import CocktailModal from '../components/CocktailModal';
import './Consumo.css';

const ITEMS_PER_PAGE = 15;

const Consumo: React.FC = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCocktail, setSelectedCocktail] = useState<CocktailDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);

  useEffect(() => {
    loadCocktails();
  }, []);

  const loadCocktails = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await cocktailService.getCocktails();
      setCocktails(data);
    } catch (err) {
      setError('Error al cargar los cócteles. Por favor, intenta de nuevo.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = async (id: string) => {
    try {
      setLoadingDetail(true);
      setIsModalOpen(true);
      const detail = await cocktailService.getCocktailDetail(id);
      setSelectedCocktail(detail);
    } catch (err) {
      console.error('Error loading cocktail detail:', err);
      setIsModalOpen(false);
    } finally {
      setLoadingDetail(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedCocktail(null);
    }, 300);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(cocktails.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentCocktails = cocktails.slice(startIndex, endIndex);

  if (loading) {
    return (
      <section id="consumo" className="section-consumo">
        <div className="container">
          <div className="loading-container">
            <div className="spinner-large"></div>
            <p className="loading-text">Cargando deliciosos cócteles...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="consumo" className="section-consumo">
        <div className="container">
          <div className="error-container">
            <div className="error-icon">😞</div>
            <h3>{error}</h3>
            <button className="retry-btn" onClick={loadCocktails}>
              Reintentar
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consumo" className="section-consumo">
      <div className="container">
        <h2 className="section-title">Colección de Cócteles Premium</h2>
        <p className="section-subtitle">
          Descubre {cocktails.length} cócteles únicos con recetas detalladas
        </p>

        <div className="cocktails-grid">
          {currentCocktails.map((cocktail) => (
            <CocktailCard
              key={cocktail.idDrink}
              cocktail={cocktail}
              onClick={handleCardClick}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      {loadingDetail && isModalOpen && (
        <div className="modal-loading-overlay">
          <div className="spinner-large"></div>
        </div>
      )}

      <CocktailModal
        cocktail={selectedCocktail}
        isOpen={isModalOpen && !loadingDetail}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Consumo;
