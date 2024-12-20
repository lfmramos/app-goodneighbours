import React, { useState } from 'react';
import './Questionnaire.css';
const Questionnaire: React.FC = () => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const areas = [
    'Cozinhar',
    'Limpeza',
    'Apoio a Idosos',
    'Jardinagem',
    'Compras',
    'Companhia',
    'Transporte',
    'Cuidado de animais',
    'Manutenção',
  ];
  const toggleSelection = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area)
        ? prev.filter((item) => item !== area)
        : [...prev, area]
    );
  };
  const handleSubmit = () => {
    alert(`Áreas selecionadas: ${selectedAreas.join(', ')}`);
  };
  return (
    <div className="questionnaire-container">
      <h1>Quais as áreas nas quais pretende colaborar?</h1>
      <p>Pode escolher uma ou mais áreas da sua preferência.</p>
      <div className="areas-grid">
        {areas.map((area) => (
          <button
            key={area}
            className={`area-button ${selectedAreas.includes(area) ? 'selected' : ''}`}
            onClick={() => toggleSelection(area)}
          >
            {area}
          </button>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="back-button">Anterior</button>
        <button className="next-button" onClick={handleSubmit}>Próximo</button>
      </div>
    </div>
  );
};
export default Questionnaire;