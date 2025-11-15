import React from 'react';
import './Navbar.css';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-section">
          <img 
            src="/images/logo umg.png" 
            alt="UMG Logo" 
            className="logo-img" 
          />
          <span className="logo-text">UMG Cocktails</span>
        </div>
        <ul className="nav-menu">
          <li>
            <a 
              href="#inicio" 
              className={`nav-link ${activeSection === 'inicio' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('inicio');
              }}
            >
              Inicio
            </a>
          </li>
          <li>
            <a 
              href="#acerca" 
              className={`nav-link ${activeSection === 'acerca' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('acerca');
              }}
            >
              Acerca de
            </a>
          </li>
          <li>
            <a 
              href="#consumo" 
              className={`nav-link ${activeSection === 'consumo' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('consumo');
              }}
            >
              Consumo API
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
