import { Link } from "react-router-dom"
import { AboutMe } from "./AboutMe";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Element, scroller } from "react-scroll";
import bbprofile from '../assets/profile.png';
import bbresume from '../assets/resume.pdf';

export const Home = () => {
  const scrollToAboutMe = () => {
    scroller.scrollTo("contact", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  
  return (
    <Element id="home" name="" className='flex-col justify-center items-center text-center h-screen pt-36
    '>
      <img src={ bbprofile } alt="Imagem de perfil da Bruna Borges" className='rounded-full object-cover w-64 h-64 bg-gray-300 border-8 border-cl-green mx-auto' />

      <h1 className='font-title text-4xl pt-14 leading-10'>Olá, eu sou a <span className="text-cl-orange">Bruna</span>
      </h1>

      <h3 className='text-xl'>Front-end Developer</h3>

      <div className='flex flex-col space-y-4 justify-center items-center pt-14 font-title'>

        <a href={ bbresume } download>
          <button className='font-semibold bg-cl-orange py-3 px-7 rounded-full font-title text-lg'>
            Download CV</button>
        </a>

        <Link onClick={scrollToAboutMe} to={""}>
          <button className="font-semibold border border-cl-orange py-3 px-7 rounded-full font-title text-lg">
            Entrar em contato
          </button>
        </Link>

      </div>
      <Element name="about-me">
        <AboutMe />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <footer className="bg-cl-green ">
          <p className="p-10 text-sm font-title">Copyright© 2024 <span className="text-cl-orange font-bold">Bruna Borges</span>. Todos os direitos reservados.</p>
      </footer>

    </Element>
  )
}