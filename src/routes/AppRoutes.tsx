import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Error } from '../pages/Error-page';
//import Sobre from '../pages/Sobre';
//import Portfolio from '../pages/Portifolio';
//import Contact from '../pages/Contato';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/bruna_borges/" element={<Home />} />
      {/*<Route path="/bruna_borges/sobre" element={<Sobre />} /> */}
      {/*<Route path="/bruna_borges/portifolio" element={<Portifolio />} /> */}
      {/*<Route path="/bruna_borges/contato" element={<Contato />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}