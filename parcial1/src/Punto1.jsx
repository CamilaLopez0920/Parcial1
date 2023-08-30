import React, { useState } from 'react';

const Punto1 = () => {

  const [s, setS] = useState(0);
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [sR, setSR] = useState(0);

  const convertirSegundos = () => {
    setH (s / 3600 );
    setM ((s % 3600) / 60);
    setSR (s % 60);
    console.log(s)
  };

  return (
    <>
      <h1>Convertir Segundos a Horas, Minutos y Segundos</h1>
      <input type="number" 
      value={s} onChange={(e) => setS(e.target.value)}/>
      <button onClick={ () =>convertirSegundos()}>Convertir</button>
      <>
        <p>Horas: {h}</p>
        <p>Minutos: {m}</p>
        <p>Segundos: {sR}</p>
      </>
    </>
  );
}

export default Punto1;