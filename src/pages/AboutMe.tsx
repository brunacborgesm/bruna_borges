import { Element } from "react-scroll";


export const AboutMe = () => {
  return (
    <Element id="about-me" name="" className="mx-10 element bg-bg-darkgreen h-screen flex flex-col justify-center items-center">
      <h2 className="text-title text-3xl text-bold mb-14">Sobre mim</h2>
      <p className="text-center text-lg">Desenvolvedora apaixonada por criar experiências digitais através do desenvolvimento web, com três anos de experiência. Foco em Front-end com ReactJS e interesse em aprimorar habilidades em Node.js para evoluir para Full-Stack Developer</p>
      <div className="flex justify-center items-center space-x-5 mx-auto mt-16 ">
        <img className="w-16 h-16 hover:" src="bruna_borges/html.png" alt="" />
        <img className="w-16 h-16" src="bruna_borges/css.png" alt="" />
        <img className="w-16 h-16" src="bruna_borges/js.png" alt="" />
      </div>

      <div className="flex justify-center items-center space-x-5 mx-auto mt-12 ">
        <img className="w-16 h-16" src="bruna_borges/react.png" alt="" />
        <img className="w-16 h-16" src="bruna_borges/tailwind.png" alt="" />
        <img className="w-16 h-16" src="bruna_borges/node.png" alt="" />
      </div>

      <div className="flex justify-center items-center  space-x-5 mx-auto mt-12">
        <img className="w-16 h-16" src="bruna_borges/material.png" alt="" />
        <img className="w-16 h-16" src="bruna_borges/ts.png" alt="" />
      </div>
    </Element>
  )
}
