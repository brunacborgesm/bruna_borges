import './App.css'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { AppRoutes } from './routes/AppRoutes.tsx';

export const App: React.FC = () => {
  return (
    <Router>
      <div className='text-body bg-bg-darkgreen text-cl-white h-screen' >
        <Header links={[]} />
        <AppRoutes />
      </div>
    </Router>
  );
}