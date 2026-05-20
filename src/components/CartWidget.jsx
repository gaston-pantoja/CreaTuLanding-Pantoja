
import React from 'react';

const CartWidget = () => {

  const itemsInCart = 5;

  return (
    <div className="d-flex align-items-center position-relative" style={{ cursor: 'pointer' }}>

      <span style={{ fontSize: '1.6rem' }}>🛒</span>

      <span className="badge rounded-pill bg-success position-absolute top-0 start-100 translate-middle text-dark fw-bold">
        {itemsInCart}
      </span>
    </div>
  );
};

export default CartWidget;