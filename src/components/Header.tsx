import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import bblogo from '../assets/bb-logo.svg';

interface HeaderProps {
  links: {
    title: string;
    url: string;
  }[];
}

export const Header: React.FC<HeaderProps> = () => {
  const links = [
    { title: 'Home', url: '/bruna_borges/home' },
    { title: 'Portifólio', url: '/bruna_borges/portifolio' },
    { title: 'Sobre', url: '/bruna_borges/sobre' },
    { title: 'Contato', url: '/bruna_borges/contato' }
  ];

  return (
    <header className='header'>
      <nav className='nav'>
        <Link to="/bruna_borges/home" className="logo-link">
          <img src={bblogo} alt="Bruna Borges logo" className="logo" />
          <div className='logo-name'>
            Bruna Borges
          </div>
        </Link>
        <div>
          <ul className='nav-list'>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}