// Ubicación: src/components/ItemListContainer.jsx
import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div className="container my-5">
      {/* Caja contenedora con fondo oscuro (#1e1e1e) y borde verde */}
      <div className="p-5 rounded" style={{ backgroundColor: '#1e1e1e', borderLeft: '5px solid #00ff88' }}>
        
        {/* Forzamos el texto a blanco puro con text-white */}
        <h1 className="display-5 fw-bold text-white mb-3">
          {props.greeting}
        </h1>
        
        {/* Cambiamos text-muted por text-light con opacidad (text-white-50) para un contraste perfecto */}
        <p className="lead text-white-50">
          Nuestra infraestructura digital está lista. Próximamente se desplegará aquí el catálogo completo de soluciones biotecnológicas y sistemas automatizados de alta eficiencia.
        </p>
        
      </div>
    </div>
  );
};

export default ItemListContainer;