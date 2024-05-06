import { Link } from "react-router-dom"
import { Element, scroller } from "react-scroll";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";

export const Home = () => {
  const scrollToAboutMe = () => {
    scroller.scrollTo("about-me", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  
  return (
    <div className='flex-col justify-center items-center text-center text-default-white pt-36
    '>
      <img src='bruna_borges/profile.png' alt="Imagem de perfil da Bruna Borges" className='rounded-full object-cover w-64 h-64 bg-gray-300 border-8 border-cl-green mx-auto' />

      <h1 className='text-title text-4xl pt-14 leading-10'>Olá, eu sou a Bruna
      </h1>

      <h3 className='text-xl'>Front-end Developer</h3>

      <div className='flex flex-col space-y-4 justify-center items-center pt-14 text-title'>

        <a href="bruna_borges/resume.pdf" download>
          <button className='font-semibold bg-cl-orange py-3 px-7 rounded-3xl text-title text-lg'>
            Download CV</button>
        </a>

        <Link onClick={scrollToAboutMe} to={""}>
          <button className="font-semibold border border-cl-orange py-3 px-7 rounded-3xl text-title text-lg">
            Entrar em contato
          </button>
        </Link>

      </div>

      <Element name="about-me">
        <AboutMe />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

    </div>
  )
}