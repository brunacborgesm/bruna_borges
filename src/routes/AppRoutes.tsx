import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Error } from '../pages/Error-page';
import { AboutMe } from '../pages/AboutMe';
//import Portfolio from '../pages/Portifolio';
//import Contact from '../pages/Contato';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/bruna_borges/" element={<Home />} />
      <Route path="/bruna_borges/about-me" element={<AboutMe />} />
      {/*<Route path="/bruna_borges/projects" element={<Projects />} /> */}
      {/*<Route path="/bruna_borges/contact" element={<Contact />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}