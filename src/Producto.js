import React from 'react';
import ProductoNombre from './ProductoNombre';
import ProductoPrecio from './ProductoPrecio';

function Producto (props) {
  return (
    <div className="producto">>
      <ProductoNombre nombre ={props.ProductoNombre}/>
      <ProductoPrecio precio={props.ProductoPrecio}/>
    </div>
  );
};

export default Producto;