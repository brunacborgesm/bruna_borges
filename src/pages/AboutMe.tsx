import { Element } from "react-scroll";
import htmlimg from "../assets/html.png"
import csslimg from "../assets/css.png"
import jsimg from "../assets/js.png"
import reactimg from "../assets/react.png"
import tailimg from "../assets/tailwind.png"
import nodeimg from "../assets/node.png"
import muiimg from "../assets/material.png"
import tsimg from "../assets/ts.png"

export const AboutMe = () => {
  return (
    <Element id="about-me" name="" className="element bg-bg-darkgreen flex flex-col h-screen justify-center items-center">
      <h2 className="font-title text-4xl text-bold mt-5">Sobre mim</h2>
      <div className="border-b-2 border-cl-green w-40 mt-2 mb-14"></div>
      <p className="text-center text-lg px-10">Desenvolvedora apaixonada por criar experiências digitais através do desenvolvimento web, com três anos de experiência. Foco em Front-end com ReactJS e interesse em aprimorar habilidades em Node.js para evoluir para Full-Stack Developer</p>
      <div className="flex justify-center items-center space-x-9 mx-auto mt-10 ">
        <img className="w-12 h-12" src={ htmlimg } alt="" />
        <img className="w-12 h-12" src={ csslimg } alt="" />
        <img className="w-12 h-12" src={ jsimg } alt="" />
        <img className="w-12 h-12" src={ reactimg } alt="" />
      </div>

      <div className="flex justify-center items-center space-x-9 mx-auto mt-12 ">
        <img className="w-12 h-12" src={ tailimg } alt="" />
        <img className="w-12 h-12" src={ nodeimg } alt="" />
        <img className="w-12 h-12" src={ muiimg } alt="" />
        <img className="w-12 h-12" src={ tsimg } alt="" />
      </div>
    </Element>
  )
}
