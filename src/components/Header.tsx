import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import bblogo from '../assets/bb-logo.svg';
import TemporaryDrawer from '../components/Drawer'; // Importe o componente TemporaryDrawer
import { useMediaQuery } from '@mui/material'; // Importe o useMediaQuery

interface HeaderProps {
  links: {
    title: string;
    url: string;
  }[];
}

export const Header: React.FC<HeaderProps> = () => {
  const links = [
    { title: 'Home', url: '/bruna_borges/' },
    { title: 'Sobre', url: '/bruna_borges/sobre' },
    { title: 'Portifólio', url: '/bruna_borges/portifolio' },
    { title: 'Contato', url: '/bruna_borges/contato' }
  ];

  const isMobile = useMediaQuery('(max-width:600px)'); // Verifica se a tela é menor que 600px

  return (
    <header className='header'>
      <nav className='nav'>
        <Link to="/bruna_borges/" className="logo-link">
          <img src={bblogo} alt="Bruna Borges logo" className="logo" />
          <div className='logo-name'>
            Bruna Borges
          </div>
        </Link>
        {isMobile ? <TemporaryDrawer /> : (
          <div>
            <ul className='nav-list'>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
