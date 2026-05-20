import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (

    <div className="bg-dark min-vh-100 text-light">

      <NavBar />
      

      <ItemListContainer greeting="Bienvenido a la vanguardia industrial e-commerce" />
    </div>
  );
}

export default App;