import React from 'react';
import { Link } from 'react-router-dom';
import bblogo from '../assets/bb-logo.svg';
import TemporaryDrawer from '../components/Drawer';
interface HeaderProps {
  links: {
    title: string;
    url: string;
  }[];
}

export const Header: React.FC<HeaderProps> = () => {
  const links = [
    { title: 'Home', url: '/bruna_borges/' },
    { title: 'Sobre', url: '/bruna_borges/about-me' },
    { title: 'Portifólio', url: '/bruna_borges/portifolio' },
    { title: 'Contatos', url: '/bruna_borges/contact' }
  ];

  const isMobile = window.innerWidth <600;
  return (
    <nav className='
      flex
      justify-between
       bg-purple
      w-full
      px-6
      h-20
      items-center
      bg-bg-darkgreen
      border-b border-cl-orange
      fixed
      text-body
      '>
      <Link to="/bruna_borges/" className='flex'>
        <img src={ bblogo } alt="Bruna Borges logo" className='w-12' />
        {!isMobile && (
          <span className='
          sm:flex
          items-center
          text-2xl
          ml-2
          hidden
          txt-title'>
            Bruna Borges
          </span>
        )}
      </Link>
      {isMobile ? <TemporaryDrawer /> : (
        <div>
          <ul className='flex'>
            {links.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
