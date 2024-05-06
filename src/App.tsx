import './App.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { AppRoutes } from './routes/AppRoutes.tsx';

export const App: React.FC = () => {
  return (
    <Router>
      <div className='h-screen text-body bg-gradient-to-b from-default-pink from-20% to-default-darkpurple' >
        <Header links={[]} />
        <AppRoutes />
      </div>
    </Router>
  );
}