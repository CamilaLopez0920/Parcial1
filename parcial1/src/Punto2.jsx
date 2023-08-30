import React, { useState } from 'react';

const Punto2 = () => {
  const [duraciondeLlamada, setDuraciondeLlamada] = useState(0);
  const costoPrimerosTresMinutos = 100;
  const costoMinutoAdicional = 50;

  const handleDuracionChange = (event) => {
    const duracion = parseInt(event.target.value);
    setDuraciondeLlamada(duracion);
  };

  const costoLlamada = () => {
    let costoTotal = 0;
    
    if (duraciondeLlamada <= 3) {
      costoTotal = costoPrimerosTresMinutos;
    } else {
      costoTotal = costoPrimerosTresMinutos + (duraciondeLlamada - 3) * costoMinutoAdicional;
    }

    console.log(costoTotal);
    return costoTotal;
    
  };

  return (
    <div>
      <h2>Costo de Llamada</h2>
      <span>Duración de la llamada (minutos):</span>
      <input type="number" value={duraciondeLlamada} onChange={handleDuracionChange} />
      <p>Costo total de la llamada: {costoLlamada()} pesos</p>
    </div>
  );
};

export default Punto2;