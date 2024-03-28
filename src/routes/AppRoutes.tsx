import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Error } from '../pages/Error-page';
//import About from '../pages/About';
//import Portfolio from '../pages/Portfolio';
//import Contact from '../pages/Contact';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/brunaborges-dev" element={<Home />} />
      {/*<Route path="/about" element={<About />} /> */}
      {/*<Route path="/portfolio" element={<Portfolio />} /> */}
      {/*<Route path="/contact" element={<Contact />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}