import React, { useState } from "react";
import Saludo from "./Saludo";
import Producto from "./Producto";
import ContadorClase from "./ContadorClase";
import ListaDeProductos from "./ListaDeProductos";
import DetalleProducto from "./DetalleProducto";

function App() {
  const productos = [
    { nombre: 'Producto 1', precio: 9.99 },
    { nombre: 'Producto 2', precio: 8.88 },
    { nombre: 'Producto 3', precio: 12.12 },
  ];

  return (
    <div>
      <Saludo name="Developer :D "/>
      <Producto ProductoNombre="Producto Uno" ProductoPrecio="11.11"/>
      <ContadorClase />
      <ListaDeProductos productos={productos} />
      <DetalleProducto
        nombre="Otro Productoo"
        precio="11.11 COP"
        descripcion="Nombre del otro Producto :D"
      />    
    </div>
  );
}

export default App;