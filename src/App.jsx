// Ubicación: src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    // Aplicamos un fondo oscuro global usando clases de Bootstrap (bg-dark, min-vh-100)
    <div className="bg-dark min-vh-100 text-light">
      {/* 1. Renderizado de la barra de navegación */}
      <NavBar />
      
      {/* 2. Renderizado del catálogo pasando el mensaje de bienvenida por props */}
      <ItemListContainer greeting="Bienvenido a la vanguardia industrial e-commerce" />
    </div>
  );
}

export default App;