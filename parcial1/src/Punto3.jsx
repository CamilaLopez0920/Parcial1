import React, { useState } from 'react';

function Punto3() {
  const [nombre, setNombre] = useState('');
  const [hora, setHora] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleHoraChange = (event) => {
    setHora(event.target.value);
    actualizaciónMensaje(event.target.value);
  };

  const actualizaciónMensaje = (hora) => {
    const horaIngreso = parseInt(hora);

    if (horaIngreso >= 0 && horaIngreso< 12) {
      setMensaje(`Buenos días, ${nombre}`);
    } else if (horaIngreso >= 12 && horaIngreso < 18) {
      setMensaje(`Buenas tardes, ${nombre}`);
    } else if
    (horaIngreso >= 18 && horaIngreso <= 24){
      setMensaje(`Buenas noches, ${nombre}`);
    } 
        
    
    console.log(mensaje);
  };

  return (
    <>
      <>
        <p htmlFor="nombre">Nombre: </p>
        <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
      </>
      <>
        <p htmlFor="hora">Hora: </p>
        <input type="number" id="hora" value={hora} onChange={handleHoraChange} />
      </>
      <>
        <p>{mensaje}</p>
      </>
    </>
  );
}

export default Punto3;