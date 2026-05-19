// Ubicación: src/components/CartWidget.jsx
import React from 'react';

const CartWidget = () => {
  // Cantidad dura de elementos (base funcional inicial)
  const itemsInCart = 5;

  return (
    <div className="d-flex align-items-center position-relative" style={{ cursor: 'pointer' }}>
      {/* Ícono representativo del carrito */}
      <span style={{ fontSize: '1.6rem' }}>🛒</span>
      {/* Badge de Bootstrap posicionado estratégicamente */}
      <span className="badge rounded-pill bg-success position-absolute top-0 start-100 translate-middle text-dark fw-bold">
        {itemsInCart}
      </span>
    </div>
  );
};

export default CartWidget;