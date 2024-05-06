import { Link } from "react-router-dom"
import { AboutMe } from "./AboutMe"

export const Home = () => {
  return (
    <div className='flex-col justify-center items-center text-center text-default-white pt-14
    '>
      <img src='bruna_borges/profile.png' alt="Imagem de perfil da Bruna Borges" className='rounded-full object-cover w-48 h-48 bg-gray-300 border-8 border-default-darkpurple mx-auto' />

      <h1 className='text-title text-3xl pt-8 leading-10'>Olá, eu sou a Bruna
      </h1>
      
      <h3 className='text-title text-xl'>Front-end Developer</h3>

      <div className='flex flex-col space-y-4 justify-center items-center pt-8'>
        
        <a href="bruna_borges/resume.pdf" download>
          <button className='font-semibold bg-default-darkpurple py-3 px-5 rounded-3xl text-title'>
            Download CV</button>
        </a>

        <Link to="/bruna_borges/about-me" className="pb-32">
          <button className='font-semibold border border-default-darkpurple py-3 px-5 text-body rounded-3xl'>Entrar em contato</button>
        </Link>
      </div>

      <AboutMe />
      
    </div>
  )
}