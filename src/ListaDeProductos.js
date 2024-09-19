import React from 'react';
import Producto2 from './Producto2';

const ListaDeProductos = ({ productos }) => {
  return (
    <ul>
      {productos.map((producto, index) => (
        <li key={index}>
          <Producto2 nombre={producto.nombre} precio={producto.precio} />
        </li>
      ))}
    </ul>
  );
};

export default ListaDeProductos;