import { useState } from 'react';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import AcercaDe from './pages/AcercaDe';
import Consumo from './pages/Consumo';
import './App.css';

type Section = 'inicio' | 'acerca' | 'consumo';

function App() {
  const [activeSection, setActiveSection] = useState<Section>('inicio');

  const handleNavigate = (section: string) => {
    setActiveSection(section as Section);
  };

  return (
    <div className="app">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      {activeSection === 'inicio' && <Inicio onNavigate={handleNavigate} />}
      {activeSection === 'acerca' && <AcercaDe />}
      {activeSection === 'consumo' && <Consumo />}
    </div>
  );
}

export default App;
