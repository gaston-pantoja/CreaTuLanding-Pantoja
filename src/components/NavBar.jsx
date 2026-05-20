
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#1a1a1a',
      borderBottom: '1px solid #333'
    }}>

      <div className="nav-logo" style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>
        <span style={{ color: '#00ff88' }}>Eco</span>Tech
      </div>


      <ul className="nav-links" style={{
        display: 'flex',
        listStyle: 'none',
        gap: '2rem',
        margin: 0,
        padding: 0
      }}>
        <li style={{ color: '#aaa', fontSize: '1rem' }}>Biotecnología</li>
        <li style={{ color: '#aaa', fontSize: '1rem' }}>Automatización</li>
        <li style={{ color: '#aaa', fontSize: '1rem' }}>Hardware Eficiente</li>
      </ul>


      <CartWidget />
    </nav>
  );
};

export default NavBar;