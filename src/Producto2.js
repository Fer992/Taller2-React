import React from 'react';

const Producto2 = ({ nombre, precio }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio: {precio}</p>
    </div>
  );
};

export default Producto2;