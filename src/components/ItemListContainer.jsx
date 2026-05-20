
import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div className="container my-5">
  
      <div className="p-5 rounded" style={{ backgroundColor: '#1e1e1e', borderLeft: '5px solid #00ff88' }}>
        

        <h1 className="display-5 fw-bold text-white mb-3">
          {props.greeting}
        </h1>
        
        <p className="lead text-white-50">
          Nuestra infraestructura digital está lista. Próximamente se desplegará aquí el catálogo completo de soluciones biotecnológicas y sistemas automatizados de alta eficiencia.
        </p>
        
      </div>
    </div>
  );
};

export default ItemListContainer;